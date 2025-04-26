const mongoose=require("mongoose")

const inputValidation=new mongoose.Schema({prop:{type:String,required:true},val:{type:String,required:true}})
const fields=new mongoose.Schema({inputType: String,labels:{type: [{type:String}], default: undefined},inputvalidation:{type:[{type:inputValidation}]},shortHand:{type:[{type:String}]}})
const select=new mongoose.Schema({mainLabel:String,options:{type:[{type:String}]},inputvalidation:{type:[{type:inputValidation}]},shortHand:{type:[{type:String}]}})
const radio=new mongoose.Schema({mainLabel:String,options:{type:[{type:String}]},inputValidation:{type:[{type:inputValidation}]},shortHand:{type:[{type:String}]}})
const checkbox=new mongoose.Schema({mainLabel:String,options:{type:[{type:String}]},inputvalidation:{type:[{type:inputValidation}]},shortHand:{type:[{type:String}]}})

const FormSchema= mongoose.Schema({
    title: {required: true,type:String,unique: true},
    noOfFields:{required: true,type: Number},
    formFields:{type:[mongoose.Schema.Types.Mixed],required:true},
    formType: {type: String,required: true}
})

const FormModel=mongoose.model("Form",FormSchema);

module.exports=FormModel;