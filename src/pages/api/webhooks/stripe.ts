// import { stripeInit } from "stripe";
import User from "../../../components/models/UserSchema";
import { getAuth } from "@clerk/nextjs/server";
// import Cors from "micro-cors";
// import verifyStripe from "@webeducation/next-verify-stripe";
// const cors = Cors({
//   allowMethods: ["POST", "HEAD"],
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);
// const endpointSecret = process.env.WEBHOOK_SECRET;
// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     let event;
//     try {
//       event = verifyStripe({
//         req,
//         stripe,
//         endpointSecret,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//     switch (event.type) {
//       case "payment_intent.succeeded": {
const paymentIntent = event?.data?.object;
const userId = paymentIntent.metadata.sub;

const userDocument = await User.find({ userid: userid });
// IF PAYMENT IS SUCCESSFUL, THEN UPDATE TOKENS
// SO UPDATE USER TOKENS HERE CODE HERE
//       }
//     }
//   }
// };
