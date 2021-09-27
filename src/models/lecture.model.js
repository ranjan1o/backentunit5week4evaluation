const monggose = require("mongoose")
const lectureSchema = new monggose.Schema({
    title: { type: String, required: true },
    intructor: { type: monggose.Schema.Types.ObjectId, ref: "users" },
    student: { type: String, required: true },
    admin:[{type:String,required:true}]
    
})
