const express=require("express")
const mongoose=require("mongoose")
const UserModel=require("../models/forms.js")


async function getDashboard(req,res){

    try{
        const forms= await UserModel.find();
        console.log(forms)
        res.status(200).json(forms)
        return;
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }

}

async function createForm(){

    
}

module.exports={getDashboard,createForm}


