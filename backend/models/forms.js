const mongoose=require("mongoose")

const FormSchema= mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    title: String,
    fields:[{inputType:String,labels:Array}]
})

const FormModel=mongoose.model("Form",FormSchema);

module.exports=FormModel;