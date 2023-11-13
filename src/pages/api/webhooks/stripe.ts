import stripeInit from "stripe";
import { getAuth } from "@clerk/nextjs/server";
import Cors from "micro-cors";
import verifyStripe from "@webdeveducation/next-verify-stripe";
import UserSchema from "../../../components/models/UserSchema";

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

export const config = {
  api: {
    bodyParser: false,
  },
};
const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.WEBHOOK_SECRET;
const handler = async (req, res) => {
  if (req.method === "POST") {
    let event;
    try {
      event = verifyStripe({
        req,
        stripe,
        endpointSecret,
      });
    } catch (error) {
      console.error(error);
    }
    switch (event.type) {
      case "payment_intent.succeeded":
        {
          /// USER ID
          const { userId } = getAuth(req);
          const userid = userId;

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
          console.log("userid:", userid);
        }
        break;
      default:
        console.log("UNHANDLED EVENT", event.type);
    }
    res.status(200).json({ received: true });
  }
};

export default cors(handler);
