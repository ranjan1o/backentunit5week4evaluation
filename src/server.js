const express = require("express")
const app = express();
const connect = require("./config/db")

app.use(express.json());
app.listen(3001, async function () {
    await connect();
    console.log("listinnig on port  3001")
})