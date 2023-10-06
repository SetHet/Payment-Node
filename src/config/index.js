import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  paypal: {
    // account: process.env.PAYPAL_ACCOUNT,
    // token: process.env.PAYPAL_TOKEN,
    id: process.env.PAYPAL_ID,
    secret: process.env.PAYPAL_SECRET,
    token: process.env.PAYPAL_TOKEN,
    appid: process.env.PAYPAL_APPID,
  },
};
