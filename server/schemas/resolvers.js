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
  JoinStylistService
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
      const client = await Client.findOne({ userId: cUserId })
        .select("-__v")
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
          path: "userId",
          model: "User",
          select: "-__v, -username, -password",
          populate: {
            path: "userProfile",
            model: "UserProfile",
            select: "-__v",
          },
        });

      const clientInfo = {
        _id: client._id,
        userId: client.userId,
        hairProfile: client.hairProfile,
        stylist: client.stylistId,
      };

      return clientInfo;
    },
    getStylistInfo: async (parent, { userId }, context) => {
      const searchStylistId = userId || context.user._id

      const stylist = await Stylist.findOne({ userId: searchStylistId })
        .select("-__v")
        .populate({
          path: "userId",
          model: "User",
          select: "-__v, -username, -password",
          populate: {
            path: "userProfile",
            model: "UserProfile",
            select: "-__v",
          },
        });

      const stylistInfo = {
        _id: stylist._id,
        userId: stylist.userId,
        certifications: stylist.certifications,
        workingHours: stylist.workingHours,
      };
      return stylistInfo;
    },
    getAllStylists: async (parent, args, context) => {
      const stylist = await Stylist.find()
        .select("-__v")
        .populate({
          path: "userId",
          model: "User",
          select: "-__v, -username, -password",
          populate: {
            path: "userProfile",
            model: "UserProfile",
            select: "-__v",
          },
        });

      const stylistArr = stylist.map((stylist) => {
        const stylistInfo = {
          _id: stylist._id,
          userId: stylist.userId,
          certifications: stylist.certifications,
          workingHours: stylist.workingHours,
        };
        return stylistInfo;
      });
      return stylistArr;
    },

    getAllClients: async (parent, args, context) => {


      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }

      const role = context.user.role?.toLowerCase();

      if (role !== "admin" && role !== "stylist") {
        throw new AuthenticationError("Not Authorized");
      }
      const client = await Client.find()
        .select("-__v")
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
          path: "userId",
          model: "User",
          select: "-__v, -username, -password",
          populate: {
            path: "userProfile",
            model: "UserProfile",
            select: "-__v",
          },
        });

      const clientsArr = client.map((client) => {
        const clientInfo = {
          _id: client._id,
          userId: client.userId,
          hairProfile: client.hairProfile,
          stylist: client.stylistId,
        };
        return clientInfo;
      });
      return clientsArr;
    },

    getServiceById: async (parent, { _id }, context) => {
      return await Service.findById({ _id });
    },

    getAllServices: async () => {
      return await Service.find({ expiredDate: null });
    },

    getAllAppointments: async (parent, args, context) => {
  
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const appointmentResults = await Appointment.find()
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
        });

      const apptDetailsArr = appointmentResults.map((item) => {
        const appointmentData = {
          _id: item._id,
          clientId: item.clientId?._id,
          stylistId: item.stylistId?._id,
          serviceId: item.serviceId?._id,
          startTime: item.startTime,
          endTime: item.endTime,
        };
        const appointmentDetails = {
          appointment: appointmentData,
          client: item.clientId,
          stylist: item.stylistId,
          service: item.serviceId,
        };

        return appointmentDetails;
      });
      return apptDetailsArr;
    },

    getAppointmentById: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      try {
        const appointmentResults = await Appointment.findById(_id)
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
          });

        const appointmentData = {
          _id: appointmentResults._id,
          clientId: appointmentResults.clientId._id,
          stylistId: appointmentResults.stylistId._id,
          serviceId: appointmentResults.serviceId._id,
          startTime: appointmentResults.startTime,
          endTime: appointmentResults.endTime,
        };

        appointmentDetails = {
          appointment: appointmentData,
          client: appointmentResults.clientId,
          stylist: appointmentResults.stylistId,
          service: appointmentResults.serviceId,
        };

        return appointmentDetails;
      } catch (e) {
        throw "There was a problem getting appointment";
      }
    },
    getAppointmentsByStylist: async (parent, { stylistId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const allStylistAppointments = await Appointment.find({
        stylistId: stylistId,
      })
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
        });

      const apptDetailsArr = allStylistAppointments.map((item) => {
        const appointmentData = {
          _id: item._id,
          clientId: item.clientId?._id,
          stylistId: item.stylistId?._id,
          serviceId: item.serviceId?._id,
          startTime: item.startTime,
          endTime: item.endTime,
        };
        const appointmentDetails = {
          appointment: appointmentData,
          client: item.clientId,
          stylist: item.stylistId,
          service: item.serviceId,
        };

        return appointmentDetails;
      });
      return apptDetailsArr;
    },
    getAppointmentsByClient: async (parent, { clientId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const allClientAppointments = await Appointment.find({
        clientId: clientId,
      })
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
        });

      const apptDetailsArr = allClientAppointments.map((item) => {
        const appointmentData = {
          _id: item._id,
          clientId: item.clientId?._id,
          stylistId: item.stylistId?._id,
          serviceId: item.serviceId?._id,
          startTime: item.startTime,
          endTime: item.endTime,
        };
        const appointmentDetails = {
          appointment: appointmentData,
          client: item.clientId,
          stylist: item.stylistId,
          service: item.serviceId,
        };

        return appointmentDetails;
      });
      return apptDetailsArr;
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
    getAllJoinStylistService: async (parent, args, context) => {

      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const joinStylistService = await JoinStylistService.find()
        .select("-__v")
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
        });

      const joinStylistServiceArr = joinStylistService.map((item) => {

        const itemDetails = {
          _id: item._id,
          stylist: item.stylistId,
          service: item.serviceId,
        };

        return itemDetails;
      });
      return joinStylistServiceArr;
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
        )
          .select("-__v")
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
            path: "userId",
            model: "User",
            select: "-__v, -username, -password",
            populate: {
              path: "userProfile",
              model: "UserProfile",
              select: "-__v",
            },
          });

        const clientInfo = {
          _id: client._id,
          userId: client.userId,
          hairProfile: client.hairProfile,
          stylist: client.stylistId,
        };

        return clientInfo;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addUpdateStylistInfo: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const role = context.user?.role?.toLowerCase();
      let updateUserId = "";

      if (role === "stylist") {
        updateUserId = context.user._id;
      } else if (role === "admin") {
        updateUserId = args.userId;
      } else {
        throw new AuthenticationError("Not Authorized");
      }     

      const { certifications, workingHours } = args;

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
      )
        .select("-__v")
        .populate({
          path: "userId",
          model: "User",
          select: "-__v, -username, -password",
          populate: {
            path: "userProfile",
            model: "UserProfile",
            select: "-__v",
          },
        });

      const stylistInfo = {
        _id: stylist._id,
        userId: stylist.userId,
        certifications: stylist.certifications,
        workingHours: stylist.workingHours,
      };

      return stylistInfo;
    },
    addService: async (parent, args, context) => {
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

        return service;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addAppointment: async (parent, args, context) => {
      if (context.user) {
        try {
          return (appointment = await Appointment.create(args));
        } catch (e) {
          throw "There was a problem saving your appointment";
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateAppointment: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      try {
        const { _id, clientId, stylistId, serviceId, startTime, endTime } =
          args;
        let appointmentDetails = {};

        const appointmentResults = await Appointment.findOneAndUpdate(
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
          });

        const appointmentData = {
          _id: appointmentResults._id,
          clientId: appointmentResults.clientId._id,
          stylistId: appointmentResults.stylistId._id,
          serviceId: appointmentResults.serviceId._id,
          startTime: appointmentResults.startTime,
          endTime: appointmentResults.endTime,
        };

        appointmentDetails = {
          appointment: appointmentData,
          client: appointmentResults.clientId,
          stylist: appointmentResults.stylistId,
          service: appointmentResults.serviceId,
        };

        return appointmentDetails;
      } catch (e) {
        throw new Exception("There was a problem updating appointment");
      }
    },
    deleteAppointment: async (parent, { _id }, context) => {
      if (context.user) {
        try {
          return await Appointment.findOneAndDelete({ _id }).select("-__v");
        } catch (e) {
          throw "There was a problem deleting the appointment";
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
    addJoinStylistService: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
  
      const role = context.user.role?.toLowerCase();
  
      if ( role !== "admin" && role !== "stylist") {
        throw new AuthenticationError("Not Authorized");
      }
        try {
          const joinStylistService=  await JoinStylistService.create(args);
          console.log(joinStylistService)
        } catch (e) {
          console.log(e)
          //throw "There was a problem associating service to stylist";
        }
      
      
    },
    updateJoinStylistService: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if ( role !== "admin" || role !== "stylist") {
        throw new AuthenticationError("Not Authorized");
      }
  
      try {
        const { _id,  stylistId, serviceId} = args;
        let joinStylistServiceDetails = {};
  
        const joinStylistServiceResults = await JoinStylistService.findOneAndUpdate(
          { _id: _id },
          {stylistId, serviceId },
          { new: true }
        )
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
          });
  
          joinStylistServiceDetails = {
          _id: joinStylistServiceResults._id,
          stylist: joinStylistServiceResults.stylistId,
          service: joinStylistServiceResults.serviceId,
        };
  
        return joinStylistServiceDetails;
      } catch (e) {
        throw new Exception("There was a problem updating stylist/service relationships");
      }
    },
    deleteJoinStylistService: async (parent, { _id }, context) => {
  
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if ( role !== "admin" || role !== "stylist") {
        throw new AuthenticationError("Not Authorized");
      }
  
        try {
          return await JoinStylistService.findOneAndDelete({ _id }).select("-__v");
        } catch (e) {
          throw "There was a problem deleting stylist/service relationships";
        }
  
    }

  },
 
};

module.exports = resolvers;
