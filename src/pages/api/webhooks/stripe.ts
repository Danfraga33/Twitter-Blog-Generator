// import { stripeInit } from "stripe";
// import Cors from "micro-cors";
// import verifyStripe from "@web";
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
//       }
//     }
//   }
// };
