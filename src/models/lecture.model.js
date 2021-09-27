const monggose = require("mongoose")
const lectureSchema = new monggose.Schema({
    title: { type: String, required: true },
    intructor: { type: monggose.Schema.Types.ObjectId, ref: "users" },
    
})
module.exports =monggose.model("lecturers",lectureSchema);
