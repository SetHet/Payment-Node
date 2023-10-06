import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  paypal: {
    account: process.env.PAYPAL_ACCOUNT,
    token: process.env.PAYPAL_TOKEN,
  },
};
