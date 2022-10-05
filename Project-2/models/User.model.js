const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    admin: {
      type: Boolean,
      default: false
    },
    businessType: String,
    address: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
