import mongoose from "mongoose";

const facilitatorSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    nationalId:{
        type:String,
        required:true,
        unique:true
    },
    courses:[{
        type: String,
        required: true
    }

    ],
    role: {
         type: String,
         enum: ['assist' , 'teach'] ,
         required: true 
    }
    
},{timestamp:true})


const facilitatorModel = mongoose.model('facilitator',facilitatorSchema)
export default facilitatorModel