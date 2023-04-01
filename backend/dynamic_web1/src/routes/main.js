const express=require("express")
const routes=express.Router()
const Detail=require("../models/detail")
const slider=require("../models/slider")
const Service=require("../models/service")
const Contact=require("../models/contact")

routes.get("/",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63e0e57d8a3fbab4804a35a6"})
    const slides=await slider.find()
    const services=await Service.find()

    //console.log(details)
    //console.log(slides)
    //console.log(services)

    res.render("index",{
        details:details,
        slides:slides,
        services:services,
    })
})

routes.get("/gallery",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63e0e57d8a3fbab4804a35a6"})
    //console.log(details)

    res.render("gallery",{
        details:details
    })
})

routes.post("/process-contact-form",async (request,response)=>{
    //console.log("form is submitted")
    //console.log(request.body)

    try{
        const data=await Contact.create(request.body)
        //console.log(data)
        response.redirect("/")
    }catch(e){
        //console.log(e)
        response.redirect("/")
    }

})


module.exports=routes