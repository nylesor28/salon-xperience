const mongoose = require('mongoose');

const { Schema } = mongoose;

const amenitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Amenity = mongoose.model('Amenity', amenitySchema);

module.exports = Amenity;