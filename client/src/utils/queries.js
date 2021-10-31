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


query getClientInfo(
  $clientUserId: ID
) {
   getClientInfo( 
   clientUserId :$clientUserId
    
  ) {
    _id

    userId {
      _id
      email
      userProfile{
        firstName
        lastName
        phoneNumber
      }
    }
    hairProfile {
      hairType
      hairGoal
      hairState
      pictureUrl
    }
    stylist {
      _id
      userId {
        _id
        email
        userProfile{
          firstName
          lastName
          phoneNumber
        }
      }
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
}
`;

export const GET_ALL_CLIENTS = gql`
query getAllClients {
  getAllClients {
   _id

   userId {
     _id
     email
     userProfile{
       firstName
       lastName
       phoneNumber
     }
   }
   hairProfile {
     hairType
     hairGoal
     hairState
     pictureUrl
   }
   stylist {
     _id
     userId {
       _id
       email
       userProfile{
         firstName
         lastName
         phoneNumber
       }
     }
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
}
`;

export const GET_STYLIST_FULL_PROFILE_INFO=gql`

query getStylistInfo( $userId:ID) {
  getStylistInfo( userId: $userId){
      _id
      userId{
        _id
        userProfile{
          _id
          firstName
          lastName
        }
      }
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


export const GET_ALL_STYLISTS = gql`
query getAllStylists {
  getAllStylists {
         _id
     userId{
       _id
       email
       userProfile{
         _id
         firstName
         lastName
         phoneNumber
       }
     }
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
      appointment {
        _id
        clientId
        stylistId
        serviceId
        startTime
        endTime
      }
      client {
        _id
				userId {
          userProfile {
            _id
            firstName
            lastName
            phoneNumber
          }
        } 
      }
      stylist {
        _id
        userId {
          userProfile{
                _id
            firstName
            lastName
            phoneNumber
          }
        }
      }
      service {
        _id
        serviceName
        price
        duration{
          hour
          minute
        }
      }
      
    }
}
`;

export const GET_APPOINTMENT_BY_ID=gql`
query getAppointmentById($_id:ID!) {
  getAppointmentById(_id: $_id) {
  appointment {
        _id
        clientId
        stylistId
        serviceId
        startTime
        endTime
      }
      client {
        _id
				userId {
          userProfile {
            _id
            firstName
            lastName
            phoneNumber
          }
        } 
      }
      stylist {
        _id
        userId {
          userProfile{
                _id
            firstName
            lastName
            phoneNumber
          }
        }
      }
      service {
        _id
        serviceName
        price
        duration{
          hour
          minute
        }
      }
      
    }
}
`;


export const GET_APPOINTMENT_BY_CLIENT_ID=gql`

query getAppointmentByClient($clientId:ID!) {
  getAppointmentsByClient( clientId: $clientId) {
   appointment {
      _id
      clientId
      stylistId
      serviceId
      startTime
      endTime
    }
    client {
      _id
      userId {
        userProfile {
          _id
          firstName
          lastName
          phoneNumber
        }
      } 
    }
    stylist {
      _id
      userId {
        userProfile{
              _id
          firstName
          lastName
          phoneNumber
        }
      }
    }
    service {
      _id
      serviceName
      price
      duration{
        hour
        minute
      }
    }
    
  }
}

`;


export const GET_APPOINTMENT_BY_STYLIST_ID=gql`
query getAppointmentByStylist($stylistId:ID!) {
  getAppointmentsByStylist( stylistId: $stylistId) {
      appointment {
        _id
        clientId
        stylistId
        serviceId
        startTime
        endTime
      }
      client {
        _id
				userId {
          userProfile {
            _id
            firstName
            lastName
            phoneNumber
          }
        } 
      }
      stylist {
        _id
        userId {
          userProfile{
                _id
            firstName
            lastName
            phoneNumber
          }
        }
      }
      service {
        _id
        serviceName
        price
        duration{
          hour
          minute
        }
      }
      
    }
}
`;


