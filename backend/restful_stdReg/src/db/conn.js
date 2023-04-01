const mongoose=require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("database connection successfull!!!")
}).catch((error)=>{
    console.log(error)
})