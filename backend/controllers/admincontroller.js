const express=require("express")
const mongoose=require("mongoose")
const FormModel=require("../models/forms.js")
const Responses=require("../models/responses.js");
const UserModel=require("../models/users.js")
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

        let formData=await FormModel.create({title:title,noOfFields:noOfFields,formFields:Fields})
        console.log(data)
        res.status(200).json({data:formData})
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"});
        return;
    }
}

async function getForms(req,res){
    if(req.body){
        try {
            const forms= await FormModel.find();
            const user=await UserModel.findOne({_id:req.user._id})
            const arr=[]
            forms.forEach(element => {
                if(!user.forms.contains(element._id)){
                    arr.push(element);
                }
            });
            res.status(200).json({data:arr});
            return;

        } catch (error) {
            res.status(400).json({message:"Submit User Data"});
            return;
        }
    }

    else{
        res.status(500).json({message:"Internal Server Error"});
        return;

    }

}

async function getFormByTitle(req,res){

    if(req.body){
        try{
            const formData=await FormModel.findOne({title: req.body.title})
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
            const user=await UserModel.findOne({username:req.body.userName});
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

module.exports={getDashboard,createForm,getForms,getResponses,getResponsesForUser}