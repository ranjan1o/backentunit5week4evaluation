const express = require("express")
const app = express();
const connect = require("./config/db")
const { register, login }=require("./controllers/user.controller")
app.use(express.json());
app.post("/register", register);
app.post("/login",login)

app.listen(3001, async function () {
    await connect();
    console.log("listinnig on port  3001")
})