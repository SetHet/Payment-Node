//import MP from "mercadopago";
import { MercadoPagoConfig, Preference, Payment } from "mercadopago";
import {config} from "../config/index.js";

const client = new MercadoPagoConfig({ accessToken: config.mercadopago.accessToken });

export default {
  PayCreate,
};

export async function PayCreate() {
  //console.log(`${config.mercadopago.accessToken} \n ${config.mercadopago.publickey}`);
  
  const payment = new Payment(client);

  // Step 4: Create the request object
  const body = {
    transaction_amount: 12.34,
    description: "<DESCRIPTION>",
    payment_method_id: "debvisa",
    payer: {
      email: "sethet1@gmail.com",
    },
  };

  // Step 5: Make the request
  payment.create({ body }).then(console.log).catch(console.log);
    return null;
}
