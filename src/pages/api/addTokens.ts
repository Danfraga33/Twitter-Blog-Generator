import stripeInit from "stripe";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "../../components/Utils/connectMongo";
import UserSchema from "../../components/models/UserSchema";

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  const lineItems = [
    {
      price: process.env.STRIPE_PRODUCT_PRICE_ID,
      quantity: 1,
    },
  ];
  const protocol =
    process.env.NODE_ENV === "development" ? "http://" : "https://";
  const host = req.headers.host;

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${protocol}${host}/Dashboard/success`,
    payment_intent_data: {
      metadata: {
        sub: userId,
      },
    },
    metadata: {
      sub: userId,
    },
  });

  res.status(200).json({ session: checkoutSession });
}
