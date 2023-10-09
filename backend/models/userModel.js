const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profileImg: {
        type: String,
        default: ""
    },
    isAdmin : {
        type: Boolean,
        require,
        default: false
    }
}, {timestamps: true})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;