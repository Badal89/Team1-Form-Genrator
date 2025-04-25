const express=require("express")
const mongoose=require("mongoose")
const UserModel=require("../models/forms.js")
const Responses=require("../models/responses.js");
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


async function createForm(req,res){
    const arr=[];
    const obj=req.body;
    const title=obj.title;
    const noOfFields=obj.noOfFields;
    const Fields=obj.formFields;
    try {

        let formData=await UserModel.create({title:title,noOfFields:noOfFields,formFields:Fields})
        console.log(data)
        res.status(200).json({data:formData})
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"});
        return;
    }
}

async function getForm(req,res){

    if(req.body){
        try{
            const formData=await UserModel.findOne({title: req.body.title})
            res.status(200).json({data:formData})
            return;
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:"Internal Server Error"});
            return;
        }
     
    }
    else{
        res.status(400).json({message:"Data Not Found"})

    }

}

async function getResponses(req,res){

    if(req.body){

        try{
            const responses=await Responses.find({formId:req.body.formId}).populate("User","userName");
            res.status(200).json({data:responses})
            return;
        }
        catch(error){

            console.log(error);
            res.status(500).json({message:"Internal Server Error"});
        }
      
    }
    else{
        res.status(400).json({message:"Please Send Form Id"});
        return;
    }

}


async function getResponsesForUser(req,res){

    if(req.body){
        try{
            const user=await UserModel.findOne({userName:req.body.userName});
        }
        catch(error){
            res.status(500).json({message:"Error While Retrieving User Details"});
            return;
        }
        try{
            const responses=await Responses.find({userName:user._id});
            res.status(200).json({data:responses});
            return;
        }
        catch(error){
            res.status(500).json({message:"Error While retrieving Responses"})
            return;
        }

    }
    else{

        res.status(400).json({message:"User Details Empty"})
        return;
    }

}

module.exports={getDashboard,createForm,getForm,getResponses,getResponsesForUser}