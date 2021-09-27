const User = require("../models/user.model");
const express = require("express");
const upload = require("../utils/file.uplaod");
const route = express.Router();
const register = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
       
        if (!user) {
            console.log(req.body);
            const user1 = await User.create(req.body);
           return res.send("registered sucessfully")
        }
       return res.send("user already exist")
      

    }
    catch (err) {
        return res.send("something went wrong")
    }
}
route.post("/", upload.single("image"), async (req, res) => {
    res.send("wow");
})
const login = async (req, res) => {
    //console.log(req.body);
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(400).json({status:"failed",message:"please try again"})
        }
        res.send("sucess")
    }
    catch (err) {
        return res.send("something ernt wrong")
    }
}
const addBook = async (req, res) => {
  res.send("book page")
}
module.exports = { register, login,addBook };