import Express from "express";
import {config} from "./config/index.js";

const app = Express()

app.get("/", (req, res) => {
    res.send("exitoso el get")
})

app.listen(config.port, (error) => {
    console.log("server up")
    console.log("port: " + config.port)
})



