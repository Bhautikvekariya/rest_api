const express=require('express');
const app=express();
const path=require("path");
let port=8080;

app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"apnacollege",
        content:"i love coding",
    },
    {
        username:"bhautikvekariya",
        content:"hardwork is important to achieve success",
    },
    {
        username:"kashayp vekariya",
        content:"i got selected f0r my 1st internship",
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.listen(port,()=>{
    console.log(`server is running to port: 8080 `);
})