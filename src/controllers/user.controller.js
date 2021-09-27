const User = require("../models/user.model");
const Lecturer = require("../models/lecture.model")
const student=require("../models/student.model")
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

const lecture = async (req, res) => {
    if (req.body) {
        try {
            const user = await User.findOne({_id: req.body.intructor }).exec();
            console.log(user.role);
            for (i in user.role) {
                if (user.role[i] === "admin" || user.role[i] === "instructor") {
                    const user1 = await Lecturer.create(req.body);
                    return res.send("Book registered sucessfully")
                }
            }
            return res.send("you r not authorized for this");
        }
        catch (err) {
           return res.send("err")
        }
    }
   
}
const getlecture = async (req, res) => {
     try {
        const user = await Lecturer.find()
        return res.send(user);
    }
    catch (err){
        return  res.send("something ernt wrong")
    }
}
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
    const a = req.body.role;
    for (i in a) {
        if (a[i]==="admin" || a[i]==="istructor") {
             return res.send("book class sucessfully")
        }
    }

   return res.send("you can.t book a lecture")
}
module.exports = { register, login,addBook,lecture,getlecture};