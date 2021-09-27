const User = require("../models/user.model");


const register = async (req, res) => {
    try {
        const user = await User.create(req.body);

    }
    catch (err) {
        return res.send("something went wrong")
    }
}
const login = async (req, res) => {
    try {
        const user = await User.findOne({ eamil: req.body.email }).exec();
        if (!user) {
            return res.status(400).json({status:"failed",message:"please try again"})
        }
    }
    catch (err) {
        return res.send("something ernt wrong")
    }
}
module.exports = { register, login };