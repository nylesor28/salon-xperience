const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Service, Order, UserProfile, Stylist } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    getUserProfile: async(parent, args, context) => {
      if (context.user) {

      const user = await User.findOne({
        _id: context.user._id,
      }).select("-__v -password")
      .populate({ path: "userProfile", select: "-__v" });

      return user;
    }
  },

    services: async () => {
      return await Service.find();
    },
    products: async (parent, { service, name }) => {
      const params = {};

      if (service) {
        params.service = service;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("service");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("service");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "service",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "service",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      const loggedInRole = (context.user?.role)?.toLowerCase();
      const newRole = (args.role)?.toLowerCase()

      if(!(loggedInRole === 'admin') && (newRole === 'admin'|| newRole=== 'stylist'))
        {
          throw new AuthenticationError("Not Authorized");
        }

      const user = await User.create(args);

      if (newRole === 'client'){
        const token = signToken(user);
        return { token, user };
      }

      // if (newRole === 'stylist') {
      //   const stylist = await Stylist.create({userId: user._id })
      // }
      return {user}
     
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).select("-__v");

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },


    addUpdateStylistInfo:  async (parent, args, context) => {
     // console.log("=======INSIDE ADD/UPDATE STYLIST =======")
     // console.log(args.workingHours)

      if(context.user){

      const role = (context.user?.role)?.toLowerCase();
      let stylistId = '';
      let updateUserId =''

      if (role === 'stylist') {
        updateUserId = context.user._id;
      }
      else if (role === 'admin') {
        updateUserId = args.userId
      }
      else {
        throw new AuthenticationError("Not Authorized");
      }
      //console.log("USERID: " , updateUserId)
      //console.log(args)
      
      const { certifications, workingHours} = args;

      //const stylist = await Stylist.create({userId: stylistId, certifications, workingHours: workingHours});
      const stylist = await Stylist.findOneAndUpdate(
        {userId: updateUserId},
        {$set: {userId: updateUserId, certifications, workingHours: workingHours}},
        {upsert: true, new: true}
        )

      //console.log (stylist)
      return stylist
      } 

    },
    addUpdateUserProfile: async (parent, { profileInput }, context) => {
      if (context.user) {
        const userId = context.user._id;
        const user = await User.findById(userId).select("-__v -password");
        const userProfileId = user.userProfile?._id;

        if (!userProfileId) {
          const newProfile = await UserProfile.create(profileInput);

          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $set: { userProfile: newProfile._id } },
            { new: true }
          )
            .select("-__v -password")
            .populate({ path: "userProfile", select: "-__v" });

          return updatedUser;
        } else {
          const updatedProfile = await UserProfile.findOneAndUpdate(
            { _id: userProfileId },
            profileInput
          ).select("-__v -password");
          const currentuser = await User.findById(userId)
            .select("-__v -password")
            .populate({ path: "userProfile", select: "-__v" });
          return currentuser;
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updatePassword: async (parent, { oldPassword, newPassword }, context) => {
 
      if (context.user) {
        const id = context.user._id;
        const user = await User.findById(id);

        const correctPw = await user.isCorrectPassword(oldPassword);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        return await User.findByIdAndUpdate(
          id,
          { password: newPassword },
          { new: true }
        ).select("-__v -password");
      }
      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        }).select("-__v -password");
      }

      throw new AuthenticationError("Not logged in");
    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
