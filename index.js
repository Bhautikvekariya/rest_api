const express=require('express');
const app=express();
const path=require("path");
let port=8080;
const { v4 :uuidv4} = require('uuid');

app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
        id:uuidv4(), 
        username:"brendan eich",
        content:"i love coding",
    },
    {
        id:uuidv4() ,
        username:"bhautikvekariya",
        content:"hardwork is important to achieve success",
    },
    {
        id:uuidv4(),
        username:"kashayp vekariya",
        content:"i got selected f0r my 1st internship",
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts/new",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4(); 
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=> id===p.id);
        post.content=newcontent;
        console.log(post);
    res.send("patch request was working");
});

app.listen(port,()=>{
    console.log(`server is running to port: 8080 `);
})