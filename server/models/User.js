const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('kendall', userSchema);

module.exports = User;