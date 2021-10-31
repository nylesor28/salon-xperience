const mongoose = require('mongoose');

const { Schema } = mongoose;

const joinStylistServiceSchema = new Schema(
  {
    serviceId: 
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

const JoinStylistService = mongoose.model('JoinStylistService', joinStylistServiceSchema);

module.exports = JoinStylistService;