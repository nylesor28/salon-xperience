const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {

    clientId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Client',
      required: true
    },
    stylistId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Stylist',
      required: true
    },
    serviceId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true
    },
    startTime: {
      type:Date,
       required: true
    },
    endTime: {
      type: Date
    }
    
  }
);


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;