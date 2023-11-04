import mongoose from 'mongoose';

// create a schema for a user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passoword: {
        type: String,
        required: true,
    }
    // timestamp will be used to sort the user based on time of creation and update later on
}, { timestamps: true });


// crete a model using the schema
const User = mongoose.model('User', userSchema);

export default User;