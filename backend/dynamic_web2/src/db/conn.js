const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/dynamic_web2",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("database connection successfull!!!")
}).catch((error)=>{
    console.log(error)
})