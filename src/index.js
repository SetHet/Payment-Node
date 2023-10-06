import Express from "express";
import {config} from "./config/index.js";
import { PayCreate, PaymentDetail } from "./services/paypal.js";
import {} from "./services/mercadopago.js";

const app = Express()
app.use(Express.json())

app.get("/", (req, res) => {
    //console.log(req.query)
    const query = req.query
    const params = req.params;
    //console.log(req)
    res.status(200).json({
        mensaje: "exitoso el get",
        query,
        params,
        body: req.body,
        header: req.headers,
    })
})

app.get("/pay", async (req, res) => {
    const body = req.body;

    const paypal = await PayCreate();


    res.status(200).json({
        mensaje: "Sistema de pago",
        body: body,
        paypal: paypal,
    })
})

app.get("/payment/detail", async (req, res) => {
    const {token, PayerID} = req.query
    const detail = await PaymentDetail({token, PayerID})
    res.json({
        detail
    })
})

app.listen(config.port, (error) => {
    console.log("server up")
    console.log("port: " + config.port)
})



