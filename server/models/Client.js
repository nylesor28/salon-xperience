const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientSchema = new Schema(
  {

    userId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    stylistId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Stylist'
    },

    hairProfile: 
      {
        pictureURL:{
          type:String,
        },    
        hairType:{
            type:String
        },
        hairState:{
            type: String
        },
        hairGoal:{
            type: String
        }
      }
  }
);


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;