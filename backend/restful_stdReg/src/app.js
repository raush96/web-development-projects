const express=require("express");
const app=express();
require("./db/conn");
const student =require("./models/student");

const port=process.env.PORT || 8000;
app.use(express.json());


app.get("/",(req,res) =>{
    res.send("<h1>Hello Brother</h1>");
})

// // handle post request using promises
// app.post("/students",(req,res)=>{
//     //console.log(req.body);
//     const user=new student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     //res.send("hello from other side");
// })

// handling post request using async await
app.post("/students",async (req,res)=>{

    try{
        const user=new student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

// get request to get data of all students
app.get("/students",async (req,res)=>{
    try{
        const studentsData=await student.find();
        res.status(201).send(studentsData);
    }catch(e){
        res.status(400).send(e);
    }
})

// get request to get data of a student by their id
app.get("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await student.findById(_id);

        if(!studentData){
            res.status(404).send();
        }else{
            res.status(201).send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

// get request to get data of a student by their name
// app.get('/students/:name', async(req,res) => {
//     try{
//     //   console.log(req.params.name);
//       let studName = req.params.name;
//       let studentData = await student.find({name:studName});
//     //    console.log(studentData)
//       if(!studentData){
//           res.status(404).send();
//       }
//       res.status(200).send(studentData);
//     }catch(err){
//      res.status(404).send(err);
//     }
//  })


app.patch("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateData=await student.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(e){
        res.status(400).send(e);
    }
})

app.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const delData=await student.findByIdAndDelete(_id);

        if(!delData){
            return res.status(400).send("Id Doesn't exist");
        }
        res.send(delData);
    }catch(e){
        res.status(500).send(e);
    }
})


app.listen(port ,()=>{
    console.log(`server is running at port ${port} `);
})













// https://www.youtube.com/watch?v=1MTBuP1nfLg&list=PLwGdqUZWnOp26kuL9GZaR0Bspm6RMAdrx&index=3