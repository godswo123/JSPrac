let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    password: String
});

let User = mongoose.model('user', UserSchema);

module.exports = User;
