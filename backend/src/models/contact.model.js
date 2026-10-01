import mongoose from"mongoose";


const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
    projectType:{
        type:String,
        required : true,
        trim: true
    },
    budget:{
    type: String,
    default:"",
    trim : true
    },
    message:{
        type: String,
        required: true,
        trim:true
    },
    status: {
        type : String,
        default : "new",
        enum: ["new" , "read" , "responded"]
    }
},{timestamps: true});

const Contact = mongoose.model("Conatct",contactSchema);

export default Contact;