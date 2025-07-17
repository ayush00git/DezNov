const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.salt = crypto.randomBytes(16).toString("hex");
  const hashedPass = crypto
    .createHmac("sha-256", this.salt)
    .update(this.password)
    .digest("hex");

  this.password = hashedPass;
  next();
});

userSchema.methods.validatePassword = function (inputPassword) {
  const hash = crypto
    .createHmac("sha256", this.salt)
    .update(inputPassword)
    .digest("hex");

  return this.password === hash;
};

const user = mongoose.model("users", userSchema);
module.exports = user;