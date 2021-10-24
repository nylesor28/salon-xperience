const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true
  },
  duration:{
    hour: {
      type: Schema.Types.Number,
      required: true, 
      min: 0,
      max: 23
    },
    minute:{  
      type: Schema.Types.Number,
      required: true, 
      min: 0,
      max: 59
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0.00
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  expiredDate: {
    type: Date
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
