const express=require("express")
const app=express()
const hbs=require("hbs")
const routes=require('./routes/main')
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Detail=require("./models/detail")
const Slider=require("./models/slider")
const Service=require("./models/service")
const exp = require("constants")


// app.get("/",(req,res)=>{
//     res.send("wow this is data from server")
// })

// app.get("/about",(req,res)=>{
//     res.send("wow this is data from about server")
// })



app.use(bodyParser.urlencoded({
    extended:true
}))
// /static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes)


 
//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")






// db connections

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/dynamic_web1",{ useNewUrlParser: true },()=>{
    console.log("mongodb connected")

    // Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'we provide courses that provide student help in learning and grow',
    //         linkText:'check',
    //         link:'https://www.google.com'
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Yahoo',
    //         description:'we provide courses that provide student help in learning and grow',
    //         linkText:'check',
    //         link:'https://www.yahoo.com'
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Leetcode',
    //         description:'we provide courses that provide student help in learning and grow',
    //         linkText:'check',
    //         link:'https://www.leetcode.com'
    //     },
    // ])


    // Slider.create([
    //     {
    //         title:"C++ Course",
    //         subTitle:"This is advanced C++ course by me",
    //         imageUrl:"static/images/p1.jpg",
    //     },
    //     {
    //         title:"Java Course",
    //         subTitle:"This is advanced Java course by me",
    //         imageUrl:"static/images/p4.jpg",
    //     },
    //     {
    //         title:"Node.Js Course",
    //         subTitle:"This is advanced Node.js course by me",
    //         imageUrl:"static/images/p3.jpg",
    //     },
    // ])


    // COMMENT THIS OUT BECZ WE HAVE TO RUN IT ONLY ONE TIME TO SEND THE DATA TO DATABASE
    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-afgPjnExlHSXMqga_cb1PBhzoGG2bT4gpA&usqp=CAU",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"services",
    //             url:"/services"
    //         },
    //         {
    //             label:"gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"about",
    //             url:"/about"
    //         },
    //         {
    //             label:"contact us",
    //             url:"/contact-us"
    //         },

    //     ]
    // })
})




app.listen(process.env.PORT | 5556, ()=>{
    console.log("App is Running on server!")
});
