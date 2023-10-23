//import MP from "mercadopago";
import { MercadoPagoConfig, Payment } from "mercadopago";
import {config} from "../config/index.js";

const client = new MercadoPagoConfig({ accessToken: config.mercadopago.accessToken });

export default {
  PayCreate,
};

export async function PayCreate() {
  console.log(`${config.mercadopago.accessToken} \n ${config.mercadopago.publickey}`);
}
