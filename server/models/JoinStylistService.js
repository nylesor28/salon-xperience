const mongoose = require('mongoose');

const { Schema } = mongoose;

const joinStylistServicesSchema = new Schema(
  {
    servicesId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Services',
      required: true
    },
    stylistId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Stylist',
      required: true
    },
  }
);

const JoinStylistService = mongoose.model('JoinStylistServices', joinStylistServicesSchema);

module.exports = JoinStylistService;