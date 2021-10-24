const { Schema, model } = require('mongoose');


const userProfileSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/[0-9]{10}/, 'Please enter a valid phone number']

    },
    address: {
      type: String,
    },

    city: {
      type: String,
    },
    zipCode: {
      type: String,
      match: [/\d{5}/, 'Please enter a valid zip code']
    },
    imageURL :{
      type: String
    }
  }
);



const UserProfile = model('UserProfile', userProfileSchema);

module.exports = UserProfile;
