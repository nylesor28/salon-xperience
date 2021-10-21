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

  type Service {
    _id: ID
    name: String
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

  type Query {
    userProfile(profileId: ID!) : UserProfile
    services: [Service]
    products(service: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUserProfile( profileInput: UserProfileInput!) : User
    addUser( username: String!, email: String!, password: String!, profileId: ID, role: String): Auth
    login(email: String!, password: String!): Auth

    updateUser(firstName: String, lastName: String, email: String ): User
    updatePassword(oldPassword: String, newPassword: String): User

    addOrder(products: [ID]!): Order
   
    updateProduct(_id: ID!, quantity: Int!): Product

  }
`;

module.exports = typeDefs;
