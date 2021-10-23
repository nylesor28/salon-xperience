const mongoose = require('mongoose');

const { Schema } = mongoose;

const stylistSchema = new Schema(
  {

    userId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    certifications: {
      type: String,
      trim: true
    },
    workingHours: [
      {
        weekday:{
          type: Schema.Types.Number,
          min: 0,
          max: 6,
          required: true
        },        
        hourStart:{
          type: Schema.Types.Number,
          min: 0,
          max: 23
        },
         minuteStart:{
          type: Schema.Types.Number,
          min: 0,
          max: 59
        },
        hourEnd:{
          type: Schema.Types.Number,
          min: 0,
          max: 23
        },
        minuteEnd:{
          type: Schema.Types.Number,
          min: 0,
          max: 59
        }
      }
    ]
  }
);


const Stylist = mongoose.model('Stylist', stylistSchema);

module.exports = Stylist;


