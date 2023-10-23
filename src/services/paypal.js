// import { loadScript } from "@paypal/paypal-js";
import {config} from "./../config/index.js"
import fetch from "node-fetch"

export default {
  PayCreate, PaymentDetail
}

export async function PayPalScriptTest() {
    let rta;
    try {
        let paypal = await loadScript({ clientId: "APP-80W284485P519543T" });
        console.log(paypal)
        rta= paypal

    } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
        rta = "failed to load the PayPal JS SDK script" + error;
    }

    return rta
}

export async function PayCreate() {
    let rta = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "PayPal-Request-Id": "7b92603e-77ed-4896-8e78-5dea2050476a",
        Authorization:
          "Bearer " + config.paypal.token,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            // reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
            amount: { currency_code: "USD", value: "100.00" },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
            //   payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
            //   brand_name: "EXAMPLE INC",
            //   locale: "en-US",
            //   landing_page: "LOGIN",
            //   shipping_preference: "SET_PROVIDED_ADDRESS",
            //   user_action: "PAY_NOW",
              return_url: "http://localhost:3000/payment/detail",
            //   cancel_url: "https://example.com/cancelUrl",
            },
          },
        },
      }),
    });

    return rta.json()
}

export async function PaymentDetail({token, PayerID}) {
  const rta = await fetch(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders/"+token,
    {
      headers: {
        Authorization:
          "Bearer " + config.paypal.token,
      },
    }
  );

  return rta.json()
}