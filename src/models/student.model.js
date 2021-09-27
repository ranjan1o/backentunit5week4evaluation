const monggose = require("mongoose");
const student_Schema = new monggose.Schema({
    rollno: { type: String, required: true },

    userid:{type:monggose.Schema.Types.ObjectId,ref:"users"}
})
module.exports = monggose.model("students", student_Schema);