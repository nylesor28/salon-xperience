const { gql } = require('apollo-server-express');

const typeDefs = gql`


type UserProfile {
  _id: ID
  firstName: String!
  lastName: String!
  phoneNumber: String!
  address: String
  city: String
  zipCode: String
  imageURL : String
}
input UserProfileInput {
  firstName: String!
  lastName: String!
  phoneNumber: String!
  address: String
  city: String
  zipCode: String
  imageURL : String
}

type Duration {
  hour: Int
  minute: Int
}

input DurationInput {
  hour: Int
  minute: Int
}



  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    service: Service
  }
  type User {
    _id: ID
    userName: String!
    password: String!
    email: String!
    role: String
    userProfile: UserProfile

  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }



  type Checkout {
    session: ID
  }
  type Auth {
    token: ID!
    user: User
  }

  
type Stylist {
  _id : ID
  userId: ID!
  certifications: String
  workingHours: [Schedule]
}
type Schedule {
  weekday: Int!
  hourStart:  Int
  minuteStart: Int
  hourEnd: Int
  minuteEnd: Int
}
input ScheduleInput {
  weekday: Int!
  hourStart:  Int
  minuteStart: Int
  hourEnd: Int
  minuteEnd: Int
}


  type Client {
    _id : ID
    userId : ID
    stylistId : ID
    hairProfile: HairProfile
  }

  type BookedClient {
    _id : ID
    userId : User
    stylistId : ID
    hairProfile: HairProfile
  }

  type BookedStylist {
    _id : ID
    userId: User
    certifications: String
    workingHours: [Schedule]
  }

  type HairProfile {
    pictureUrl: String
    hairType: String
    hairState: String
    hairGoal: String

  }

  input HairProfileInput {
    pictureUrl: String
    hairType: String
    hairState: String
    hairGoal: String

  }

  type ClientCompleteProfile {
    _id : ID
    userId : User
    stylist: BookedStylist
    hairProfile: HairProfile
  }

  type Service {
    _id: ID
    serviceName: String
    duration: Duration
    price: Float
    createdDate: String
    expiredDate: String
  }

  type Appointment {
    _id: ID
    clientId: ID
    stylistId: ID
    serviceId: ID
    startTime: String
    endTime: String
  }

  type AppointmentDetails{
    appointment: Appointment
    client: BookedClient
    stylist: BookedStylist
    service: Service
  }

  type Query {
    getUserProfile : User

    getClientInfo(clientUserId : ID) : ClientCompleteProfile 
    getStylistInfo(userId: ID ) : BookedStylist
    getServiceById(_id: ID!) : Service
    getAllServices: [Service]
    getAllAppointments: [AppointmentDetails]
    getAppointmentById(_id: ID): AppointmentDetails
    getAppointmentsByStylist(stylistId: ID): [AppointmentDetails]
    getAppointmentsByClient(clientId: ID): [AppointmentDetails]
    products(service: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUpdateUserProfile( profileInput: UserProfileInput!) : User
    addUser( username: String!, email: String!, password: String!, profileId: ID, role: String): Auth
    addService (serviceName: String!, duration: DurationInput!, price: String!) : Service
    updateService (_id: ID!, serviceName: String!, duration: DurationInput!, price: Float!) : Service
    deleteService (_id: ID!) : Service
    addAppointment(clientId: ID!, stylistId: ID!, serviceId: ID!, startTime: String!, endTime: String) : Appointment
    updateAppointment (_id: ID!, clientId: ID!, stylistId: ID!, serviceId: ID!, startTime: String!, endTime: String) : AppointmentDetails
    deleteAppointment (_id: ID!): Appointment

    login(email: String!, password: String!): Auth

    addUpdateClientInfo(_id: ID, stylistId: ID, hairProfileInput: HairProfileInput) : ClientCompleteProfile
    addUpdateStylistInfo(_id: ID, userId: ID,  certifications: String, workingHours: [ScheduleInput]) : BookedStylist
    updateUser(firstName: String, lastName: String, email: String ): User
    updatePassword(oldPassword: String, newPassword: String): User

    addOrder(products: [ID]!): Order
   
    updateProduct(_id: ID!, quantity: Int!): Product

  }
`;

module.exports = typeDefs;

