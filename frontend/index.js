const express=require("express");
const app=express();
app.use("/static",express.static("public/images"));

app.use(express.static("views"));

app.get("/",(req,res)=>{
    res.render("index",{});
});

app.get("/admin",(req,res)=>{
     res.render("admin.ejs");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
