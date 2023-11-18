import stripeInit from "stripe";
import { getAuth } from "@clerk/nextjs/server";

const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY as string);

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  const lineItems = [
    {
      price: process.env.STRIPE_TEST_PRODUCT_PAGE,
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
