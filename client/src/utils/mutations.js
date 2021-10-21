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

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        service {
          name
        }
      }
    }
  }
`;




export const ADD_USER_PROFILE = gql`

mutation addUserProfile($profileInput: UserProfileInput!){
  addUserProfile (profileInput:$profileInput) {
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