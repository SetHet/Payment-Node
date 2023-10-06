import Express from "express";
import {config} from "./config/index.js";
import {} from "./services/paypal.js"
import {} from "./services/mercadopago.js";

const app = Express()
app.use(Express.json())

app.get("/", (req, res) => {
    res.send("exitoso el get")
})

app.get("/pay", (req, res) => {
    const body = req.body;



    res.status(200).json({
        mensaje: "Sistema de pago",
        body: body,
    })
})

app.listen(config.port, (error) => {
    console.log("server up")
    console.log("port: " + config.port)
})



