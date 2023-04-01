const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        unique:true,
    },
    address:{
        type:String,
        required:true,
        minlength:5,
    }

})

const student=new mongoose.model("student",studentSchema);
module.exports=student;