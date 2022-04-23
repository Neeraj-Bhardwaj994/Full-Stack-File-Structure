import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    anything: {
        type: String,
        required: [true, "Please enter anything"]
    },

    anything: {
        type: String,
        required: [true, "Please enter anything"],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"]
    },

    anything: {
        type: String,
        required: [true, "Please enter anything"],
        minlength: 6,
        select: false
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
})


const User = mongoose.model('User', userSchema);
export default User;