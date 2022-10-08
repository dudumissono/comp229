const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
   firstname: String,
   lastname: String,
   email: String,
   username: String,
   password: String
});

mongoose.model("User", UserSchema);
