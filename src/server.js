const express = require("express")
const app = express();
const connect = require("./config/db")
const { register, login ,addBook} = require("./controllers/user.controller")
const upload=require("./utils/file.uplaod")
app.use(express.json());
app.post("/register", register);
app.post("/login", login);
app.post("/lecture", addBook);
app.get("/lecture",)


app.listen(3001,async function () {
    await connect();
    console.log("listinnig on port  3001")
})