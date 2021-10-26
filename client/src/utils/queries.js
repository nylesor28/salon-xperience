import { gql } from '@apollo/client';

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
  {
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

export const GET_CLIENT_FULL_PROFILE_INFO=gql`
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
`;

export const GET_STYLIST_FULL_PROFILE_INFO=gql`

mutation addUpdateStylistInfo(
  $_id: ID
  $userId: ID
  $certifications: String
  $scheduleInput: [ScheduleInput]
) {
   addUpdateStylistInfo( 
   _id :$_id
    userId: $userId
    certifications: $certifications
     workingHours: $scheduleInput
  ) {
    _id
    userId
    certifications
    workingHours {
      weekday
      hourStart
      minuteStart
      hourEnd
      minuteEnd
    
    }
  }
}

`;

export const GET_ALL_APPOINTMENTS=gql`

query getAllAppointments {
  getAllAppointments{
    _id
      clientId
      stylistId
      serviceId
      startTime
      endTime
  }
}


`;


export const GET_APPOINTMENT_BY_ID=gql`

query getAppointmentById($_id:ID!) {
  getAppointmentById(_id: $_id) {
    _id
      clientId
      stylistId
      serviceId
      startTime
      endTime
  }
}


`;


export const GET_APPOINTMENT_BY_CLIENT_ID=gql`

query getAppointmentByClient($clientId:ID!) {
  getAppointmentsByClient( clientId: $clientId) {
    _id
      clientId
      stylistId
      serviceId
      startTime
      endTime
  }
}
`;


export const GET_APPOINTMENT_BY_STYLIST_ID=gql`

query getAppointmentByStylist($stylistId:ID!) {
  getAppointmentsByStylist( stylistId: $stylistId) {
    _id
      clientId
      stylistId
      serviceId
      startTime
      endTime
  }
}

`;


