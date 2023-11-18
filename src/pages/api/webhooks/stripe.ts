import stripeInit, { Stripe } from "stripe";
import UserSchema from "../../../components/models/UserSchema";
import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "stream/consumers";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variables");
}

const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    res.status(500).json({ error: "Internal error" });
    throw new Error("Missing STRIPE_WEBHOOK_SECRET environment variables");
  }

  if (req.method === "POST") {
    const body = await buffer(req);
    const signature = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body.toString(),
        signature ?? "",
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "failed to load data" });
    }

    console.log(event);

    switch (event.type) {
      case "payment_intent.succeeded":
        {
          /// PAYMENT ID
          const paymentIntent = event?.data?.object;
          const paymentUserId = paymentIntent.metadata.sub;
          //////////////
          const userProfile = await UserSchema.updateOne(
            {
              userid: paymentUserId,
            },
            {
              $inc: {
                tokens: 10,
              },
              $setOnInsert: {
                userid: paymentUserId,
              },
            },
            {
              upsert: true,
            },
          );
          console.log(userProfile);
          console.log("paymentUserId:", paymentUserId);
        }
        break;
      default:
        console.log("UNHANDLED EVENT", event.type);
    }
    res.status(200).json({ received: true });
  }
};

export default handler;
