import { gql } from '@apollo/client';

export const QUERY_MERCHANDISES = gql`
  query getMerchandises($amenity: ID) {
    merchandises(amenity: $amenity) {
      _id
      name
      description
      price
      quantity
      image
      amenity {
        _id
      }
    }
  }
`;

export const QUERY_ALL_MERCHANDISES = gql`
  {
    merchandises {
      _id
      name
      description
      price
      quantity
      amenity {
        name
      }
    }
  }
`;

export const QUERY_AMENITIES = gql`
  {
    amenities {
      _id
      name
    }
  }
`;

export const QUERY_OPERATOR= gql`
  {
    operator {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        merchandies {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($product: ID) {
    products(product: $product) {
      _id
      name
      description
      price
      quantity
      image
      product {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      product {
        name
      }
    }
  }
`;

export const QUERY_SERVICES = gql`
query {
    services {
      _id
      name
    }
  }
`;

export const QUERY_SERVICES_BY_ID = gql`
  
query getServiceById(
  $_id:ID!
) {
  getServiceById(
    _id: $_id
  ) {
    _id
    serviceName
    price
    duration {
      hour
      minute
    }
    expiredDate
  }
}
`;


export const QUERY_ALL_SERVICES = gql`
  
query GetAllServices{
  getAllServices {
    _id
    serviceName
    duration{
      hour
      minute
    }
    price
    createdDate
    expiredDate
    
  }
}
`;


export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const GET_USER_PROILE = gql`
query GetUserProfile{
  getUserProfile {
    _id
    userProfile {
      _id
      firstName
      lastName
      phoneNumber
      address
      city
      zipCode
      imageURL
    }
  }
}
`;

export const GET_CLIENT_HAIR_PROFILE_INFO=gql`
query getClientInfo( $userId:ID!) {
  getClientInfo( clientUserId: $userId){
    client {
      _id
      userId
      hairProfile {
				hairType
        hairGoal
        hairState
      }
    }
    user {
      _id
      userName
      email
      userProfile {
        firstName
        lastName
        phoneNumber
        address
        city
        zipCode
        imageURL
      }
  	}
    
  }
}
`