const express=require("express")

const app=express()

app.use(express.static("views"))

app.get("/",(req,res)=>{

    res.render("index.html");

})

app.listen(9763,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Application Running");
    }
})
