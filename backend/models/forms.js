const mongoose=require("mongoose")

const fields=new mongoose.Schema({inputType: String,labels:{type: Array, default: undefined}})

const FormSchema= mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    title: {required: true,type:Number,unique: true},
    noOfFields:{required: true,type: Number},
    formFields:{type:[fields],required: true,default:undefined}
})


const FormModel=mongoose.model("Form",FormSchema);

module.exports=FormModel;