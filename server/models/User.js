const { Schema, model, SchemaType } = require('mongoose');
const bcrypt = require('bcrypt');

// import post schema 

const userSchema = new Schema(
  {
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set the array of data that adheres to the userSchema
    following: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    followers: {
      type: Schema.Types.ObjectId,
    ref: "User"
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Post"
      }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
