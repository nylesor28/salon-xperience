import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         service {
//           name
//         }
//       }
//     }
//   }
// `;

export const ADD_ORDER = gql`
  mutation addOrder($merchandises: [ID]!) {
    addOrder(merchandises: $merchandises) {
      purchaseDate
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
  }
`;
export const ADD_OPERATOR = gql`
  mutation addOperator(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addOperator(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;




export const ADD_UPDATE_USER_PROFILE = gql`

mutation addUpdateUserProfile($profileInput: UserProfileInput!){
  addUpdateUserProfile (profileInput:$profileInput) {
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



export const ADD_USER = gql`
    mutation addUser(
      $username: String!
      $email: String!
      $password: String!
      $role: String
      $profileId: ID
    ) {
      addUser(
        username: $username
        email: $email
        password: $password
        role: $role
        profileId: $profileId
        
      ) {
        token
        user{
          _id
        }
      }
    }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(  
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword (
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) 
    {
        _id
    }
  }
  `;

  
export const ADD_UPDATE_CLIENT_INFO = gql`

mutation addUpdateClientInfo(
  $_id: ID
  $stylistId : ID
  $hairProfileInput: HairProfileInput
) {
   addUpdateClientInfo( 
   _id :$_id
    stylistId: $stylistId
     hairProfileInput: $hairProfileInput
  ) {
    _id
    userId
    stylistId
    hairProfile {
      hairType
      hairType
      hairState
      pictureUrl
    }
  }
}
`;

export const ADD_SERVICE = gql`
mutation addService(
  $serviceName: String!
  $durationInput: DurationInput!
  $price: String!
) {
  addService(
    serviceName: $serviceName
    duration:	$durationInput 
    price:$price
  ) {
    _id
    serviceName
    price
    duration {
      hour
      minute
    }
  }
}
`;

export const UPDATE_SERVICE = gql`

mutation updateService(
  $_id:ID!
  $serviceName: String!
  $durationInput: DurationInput!
  $price: Float!
) {
  updateService(
    _id: $_id
    serviceName: $serviceName
    duration:	$durationInput 
    price:$price
  ) {
    _id
    serviceName
    price
    duration {
      hour
      minute
    }
  }
}
`;

export const EXPIRE_SERVICE = gql`

mutation deleteService(
  $_id:ID!
) {
  deleteService(
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