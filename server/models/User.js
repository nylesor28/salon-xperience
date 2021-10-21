const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    userProfile: 
      {
        type: Schema.Types.ObjectId,
        ref: 'UserProfile'
      }
    ,
    role: 
      {
        type: String,
        enum : ['client', 'stylist', 'admin'],
        default: "client"
      }
    
  },

);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {

  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);

  }

  next();
});

userSchema.pre(['updateOne', 'findOneAndUpdate'], async function(next) {
  console.log("======USER UPDATE======")
  console.log(this)
    if (this._update.password) {
    const saltRounds = 10;
    this._update.password = await bcrypt.hash(this._update.password, saltRounds);
  }
  console.log("======USER UPDATE END ======")
  console.log(this)
  console.log("************************************")

  next();
});


// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
