const monggose = require("mongoose");
const userSchema = new monggose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile_pic: { type: String, required: true },
    role:[{ type: String, required: true }]
})
module.exports = monggose.model("users", userSchema);
