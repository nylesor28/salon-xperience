const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Product,
  Service,
  Order,
  UserProfile,
  Client,
  Stylist,
  Appointment,
} = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


const resolvers = {
  Query: {
    getUserProfile: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({
          _id: context.user._id,
        })
          .select("-__v -password")
          .populate({ path: "userProfile", select: "-__v" });

        return user;
      }
    },
    getClientInfo: async (parent, { clientUserId }, context) => {
      let cUserId = "";

      if (context.user) {
        if (context.user.role?.toLowerCase() === "client")
          cUserId = context.user._id;
      } else {
        cUserId = clientUserId;
      }

      const client = await Client.findOne({ userId: cUserId }).select("-__v");
      console.log(client);
      const user = await User.findOne({
        _id: client.userId,
      })
        .select("-__v -password")
        .populate({ path: "userProfile", select: "-__v" });

      return { user, client };
    },
    getStylistInfo: async (parent, { userId }, context) => {
      console.log(userId);

      const stylist = await Stylist.findOne(
        { userId: userId }
        // {
        //   $or : [
        //            {userId: userId},
        //            {_id : stylistId}
        //         ]
        // }
      );
      console.log(stylist);
      const user = await User.findOne({
        _id: stylist.userId,
      })
        .select("-__v -password")
        .populate({ path: "userProfile", select: "-__v" });

      //console.log ("============= STYLIST =================")

      // console.log ("============= STYLIST USER INFO =================")
      //  console.log(stylistInfo)

      const obj = { user, stylist };
      console.log(obj);
      return { stylist, user };
      //return obj
    },

    getServiceById: async (parent, { _id }, context) => {
      return await Service.findById({ _id });
    },

    getAllServices: async () => {
      return await Service.find({ expiredDate: null });
    },

    getAllAppointments: async (parent, args, context) => {
      console.log("INSIDE GET APPOINTMENTS");
      if (context.user) {
        const allAppointments = await Appointment.find().select("-__v");

        console.log(allAppointments);
        return allAppointments;
      }
      throw new AuthenticationError("Not logged in");
    },

    getAppointmentById: async (parent, { _id }, context) => {
      console.log("INSIDE GET APPOINTMENTS");
      if (context.user) {
        const appointment = await Appointment.findById(_id).select("-__v");

        console.log(appointment);
        return appointment;
      }
      throw new AuthenticationError("Not logged in");
    },
    getAppointmentsByStylist: async (parent, { stylistId }, context) => {
      if (context.user) {
        const allStylistAppointments = await Appointment.find({
          stylistId: stylistId,
        }).select("-__v");

        console.log(allStylistAppointments);
        return allStylistAppointments;
      }
      throw new AuthenticationError("Not logged in");
    },
    getAppointmentsByClient: async (parent, { clientId }, context) => {
      if (context.user) {
        const allClientAppointments = await Appointment.find({
          clientId: clientId,
        }).select("-__v");

        console.log(allClientAppointments);
        return allClientAppointments;
      }
      throw new AuthenticationError("Not logged in");
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
      const loggedInRole = context.user?.role?.toLowerCase();
      const newRole = args.role?.toLowerCase();

      if (
        !(loggedInRole === "admin") &&
        (newRole === "admin" || newRole === "stylist")
      ) {
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
    addUpdateClientInfo: async (parent, args, context) => {
      if (context.user) {
        const role = context.user?.role?.toLowerCase();
        let updateUserId = "";

        if (role === "client") {
          updateUserId = context.user._id;
        } else {
          throw new AuthenticationError("Not Authorized");
        }

        const { stylistId, hairProfileInput } = args;

        const client = await Client.findOneAndUpdate(
          { userId: updateUserId },
          {
            $set: {
              userId: updateUserId,
              stylistId,
              hairProfile: hairProfileInput,
            },
          },
          { upsert: true, new: true, runValidators: true }
        ).select("-__v");

        return client;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addUpdateStylistInfo: async (parent, args, context) => {
      // console.log("=======INSIDE ADD/UPDATE STYLIST =======")
      // console.log(args.workingHours)

      if (context.user) {
        const role = context.user?.role?.toLowerCase();
        let stylistId = "";
        let updateUserId = "";

        if (role === "stylist") {
          updateUserId = context.user._id;
        } else if (role === "admin") {
          updateUserId = args.userId;
        } else {
          throw new AuthenticationError("Not Authorized");
        }
        //console.log("USERID: " , updateUserId)
        //console.log(args)

        const { certifications, workingHours } = args;

        //const stylist = await Stylist.create({userId: stylistId, certifications, workingHours: workingHours});
        const stylist = await Stylist.findOneAndUpdate(
          { userId: updateUserId },
          {
            $set: {
              userId: updateUserId,
              certifications,
              workingHours: workingHours,
            },
          },
          { upsert: true, new: true, runValidators: true }
        );

        //console.log (stylist)
        return stylist;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addService: async (parent, args, context) => {
      console.log(args);
      if (context.user) {
        if (context.user.role !== "admin") {
          throw new AuthenticationError("Not Authorized");
        }

        const { serviceName, duration, price } = args;
        let floatPrice = parseFloat(price);

        const service = await Service.create({
          serviceName,
          duration,
          price: floatPrice,
        });

        return service;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateService: async (parent, args, context) => {
      if (context.user) {
        if (context.user.role !== "admin") {
          throw new AuthenticationError("Not Authorized");
        }

        const { _id, serviceName, duration, price } = args;
        let floatPrice = parseFloat(price);

        const service = await Service.findOneAndUpdate(
          { _id: _id },
          { serviceName, duration, price: floatPrice },
          { new: true }
        ).select("-__v");

        return service;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    deleteService: async (parent, { _id }, context) => {
      if (context.user) {
        if (context.user.role !== "admin") {
          throw new AuthenticationError("Not Authorized");
        }

        const service = await Service.findByIdAndUpdate(
          { _id },
          { expiredDate: Date.now() },
          { new: true }
        ).select("-__v");

        let objService = new Service(service);
        objService.expiredDate = new Date(service.expiredDate);
        console.log(service);
        console.log(objService);
        return objService;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addAppointment: async (parent, args, context) => {
      console.log(args);
      if (context.user) {
        const appointment = await Appointment.create(args);
        console.log(appointment);
        return appointment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateAppointment: async (parent, args, context) => {
      console.log("========= UPDATE APPOINTMENT======");
      console.log(args);
      console.log(context.user);

      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      try {
        const { _id, clientId, stylistId, serviceId, startTime, endTime } =
          args;
        let appointmentDetails = {};

        // const appointment = await Appointment.findOneAndUpdate(
        //   { _id },
        //   { clientId, stylistId, serviceId, startTime, endTime },
        //   { new: true }
        // ).select("-__v")

        // console.log("APPT FIND:  ", appointment)

        // const client = await Client.findOne({_id: clientId}).select("-__v")

        // console.log("CLIENT FIND:  ", client)

        // const stylist = await Stylist.findOne({_id: stylistId}).select("-__v")

        // console.log("CLIENT FIND:  ", client)
        



        const appointmentResults = await Appointment.findOneAndUpdate(
          //  return await Appointment.findOneAndUpdate(
          { _id: _id },
          { clientId, stylistId, serviceId, startTime, endTime },
          { new: true }
        )
         .select("-__v")
          .populate({
            path: "clientId",
            model: "Client",
            select: "-__v",
            populate: {
              path: "userId",
              model: "User",
              select: "-__v, -username, -password",
              populate: {
                path: "userProfile",
                model: "UserProfile",
                select: "-__v",
              },
            },
          })
          .populate({
            path: "stylistId",
            model: "Stylist",
            select: "-__v",
            populate: {
              path: "userId",
              model: "User",
              select: "-__v, -username, -password",
              populate: {
                path: "userProfile",
                model: "UserProfile",
                select: "-__v",
              },
            },
          })
          .populate({
            path: "serviceId",
            model: "Service",
            select: "-__v -createdDate",
          })
          console.log ("***LEVEL Three (3) ****")
          console.log (appointmentResults)

          const appointmentData = {
                _id: appointmentResults._id,
                clientId: appointmentResults.clientId._id,
                stylistId: appointmentResults.stylistId._id,
                serviceId: appointmentResults.serviceId._id,
                startTime: appointmentResults.startTime,
                endTime: "appointmentResults.endTime",
              };
              
              //console.log(appointmentData);
              appointmentDetails = {
                appointment: appointmentData,
                client: appointmentResults.clientId,
                stylist: appointmentResults.stylistId,
                service: appointmentResults.serviceId,
              };
         console.log ("***LEVEL Four (4) ****")
         console.log("**********APPOINTMENT DATA***************");
         console.log(appointmentDetails);
          return appointmentDetails

          // .exec(function (err, appointmentResults) {
          //   if (err) return handleError(err);
          //   console.log(
          //     "=============GETTING APPOINTMENT DETAILS =============="
          //   );
          //   console.log(
          //     "Here is the populated appointment: ",
          //     appointmentResults
          //   );
          //   console.log(
          //     "===> UserProfile Data ",
          //     appointmentResults.clientId.userId.userProfile
          //   );

          //   const appointmentData = {
          //     _id: appointmentResults._id,
          //     clientId: appointmentResults.clientId._id,
          //     stylistId: appointmentResults.stylistId._id,
          //     serviceId: appointmentResults.serviceId._id,
          //     startTime: appointmentResults.startTime,
          //     endTime: "appointmentResults.endTime",
          //   };
          //   console.log("**********APPOINTMENT DATA***************");
          //   console.log(appointmentData);
          //   appointmentDetails = {
          //     appointment: appointmentData,
          //     client: appointmentResults.clientId,
          //     stylist: appointmentResults.stylistId,
          //     service: appointmentResults.serviceId,
          //   };

          //   console.log("--------appointmentDetails -----");
          //   console.log(appointmentDetails.service);

          //   return appointmentDetails;
          // })

        console.log("*******LINE 508*******");
        //  console.log("--------RESULTS -----", appointmentResults)

        // return appointmentDetails
        //  return {
        //   appointment: {_id: "1234", clientId: "5678" , stylistId: "0123", serviceId: "554", startTime: "2012-01-01"},
        //   client: {_id: "Some Client ID", userId: ""},
        //   stylist: Stylist,
        //   service: Service,

        //  }
        // appointment: new Appointment (appointmentData),
        // client: new Client(appointmentDetails.client),
        // stylist: new Stylist (appointmentDetails.stylist),
        // service: new Service (appointmentDetails.service)
      } catch (e) {
        console.log("*******************", e);
      }
    },
    deleteAppointment: async (parent, { _id }, context) => {
      console.log(_id);
      if (context.user) {
        const appointment = await Appointment.findOneAndDelete({ _id }).select(
          "-__v"
        );

        console.log(appointment);
        return appointment;
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
