const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Service, Order, UserProfile, Client, Merchandise} = require("../models");
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
  getClientInfo:  async (parent, {clientUserId}, context) => {
    let cUserId = ""

    if(context.user){
        if (context.user.role?.toLowerCase() === 'client')
          cUserId = context.user._id
    }
    else {
        cUserId = clientUserId
    }

    const client = await Client.findOne(
      {userId: cUserId}
    ).select("-__v")
    console.log(client)
   const user = await User.findOne({
      _id: client.userId,
    }).select("-__v -password")
    .populate({ path: "userProfile", select: "-__v" });


    
    return  {user, client}

    
   },

    getServiceById: async (parent, {_id}, context) => {
    
      return await Service.findById( {_id});
    },

    getAllServices: async () => {
      return await (Service.find({expiredDate:null}))
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
    amenities: async () => {
      return await Amenity.find();
    },
    merchandises: async (parent, { amenity, name }) => {
      const params = {};

      if (amenity) {
        params.amenity = amenity;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Merchandise.find(params).populate('amenity');
    },
    Merchandise: async (parent, { _id }) => {
      return await Merchandise.findById(_id).populate('amenity');
    },
    operator: async (parent, args, context) => {
      if (context.operator) {
        const operator = await Operator.findById(context.operator._id).populate({
          path: 'orders.products',
          populate: 'amenity'
        });

        operator.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return operator;
      }

      throw new AuthenticationError('Not logged in');
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
      const token = signToken(user);

      return { token, user };
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
    addUpdateClientInfo:  async (parent, args, context) => {
 
       if(context.user){
 
       const role = (context.user?.role)?.toLowerCase();
       let updateUserId =''
 
       if (role === 'client') {
         updateUserId = context.user._id;
       }
       else {
         throw new AuthenticationError("Not Authorized");
       }
 
       const { stylistId, hairProfileInput} = args;
 
       const client = await Client.findOneAndUpdate(
         {userId: updateUserId},
         {$set: {userId: updateUserId, stylistId, hairProfile: hairProfileInput}},
         {upsert: true, new: true, runValidators:true}
         ).select("-__v")

       return client
       } 
       throw new AuthenticationError("You need to be logged in!");
     },

     addService:  async (parent, args, context) => {
       console.log (args)
      if(context.user){

        if (context.user.role !== 'admin') {
          throw new AuthenticationError("Not Authorized");
        }
  
        const { serviceName, duration, price} = args;
        let floatPrice = parseFloat(price);

        const service = await Service.create ({serviceName, duration, price:floatPrice})
        
        return service
        } 
      throw new AuthenticationError("You need to be logged in!");
    },

    updateService:  async (parent, args, context) => {
  
     if(context.user){

       if (context.user.role !== 'admin') {
         throw new AuthenticationError("Not Authorized");
       }
 
       const {_id,  serviceName, duration, price} = args;
       let floatPrice = parseFloat(price);

       const service = await Service.findOneAndUpdate(
              {_id: _id}, 
              {serviceName, duration, price:floatPrice},   
              { new: true }
            ).select("-__v");
       
       return service
       } 
     throw new AuthenticationError("You need to be logged in!");
   },

   deleteService:  async (parent, {_id}, context) => {
  
    if(context.user){

      if (context.user.role !== 'admin') {
        throw new AuthenticationError("Not Authorized");
      }

      const service = await Service.findByIdAndUpdate(
             {_id}, 
             {expiredDate: Date.now()},
             { new: true }
           ).select("-__v");
      
      let objService = new Service(service)
      objService.expiredDate = new Date (service.expiredDate)
      console.log(service)
      console.log(objService)
      return objService
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
    addOperator: async (parent, args) => {
      const operator = await Operator.create(args);
      const token = signToken(operator);

      return { token, operator };
    },
    updateOperator: async (parent, args, context) => {
      if (context.operator) {
        return await Operator.findByIdAndUpdate(context.operator._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateMerchandise: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Merchandise.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const operator = await Operator.findOne({ email });

      if (!operator) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await operator.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(operator);

      return { token, operator };
    }
  },
};

module.exports = resolvers;