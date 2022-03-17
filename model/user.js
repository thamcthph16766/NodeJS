import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    name:{
        type: String,
        minlength:30,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: email
    },
    phone:{
        type: Number,
        minlength:10,
        required: phone
    },
    pass:{
        type: String,
        minlength:8,
        required: pass
    }
})