const express=require("express");
const app=express();
app.use("/static",express.static("public/images"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/dashboard",(req,res)=>{
    console.log("Hello")
     res.render("admin.ejs");
})

app.get("/form",(req,res)=>{
    res.render("createform.ejs");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
