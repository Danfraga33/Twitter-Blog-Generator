import stripeInit from "stripe";
import { getAuth } from "@clerk/nextjs/server";
<<<<<<< HEAD
const stripe = new stripeInit(process.env.STRIPE_KEY as string);
=======

const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY as string);
>>>>>>> a8cf853099a863bf7036557fef9d7077152b6087

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  const lineItems = [
    {
<<<<<<< HEAD
      // price: process.env.STRIPE_PRODUCT_PRICE_ID,
      // quantity: 1,
      price: process.env.STRIPE_PRODUCT_PRICE_ID,
=======
      price: process.env.STRIPE_TEST_PRODUCT_PAGE,
>>>>>>> a8cf853099a863bf7036557fef9d7077152b6087
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
