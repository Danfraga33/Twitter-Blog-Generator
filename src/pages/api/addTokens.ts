import stripeInit from "stripe";
import { getAuth } from "@clerk/nextjs/server";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing Stripe environment variables");
}
 
const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (!process.env.STRIPE_PRODUCT_PRICE_ID) {
    res.status(500).json({ error: "Internal error" });
    throw new Error("Missing STRIPE_PRODUCT_PRICE_ID environment variables");
  }

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
