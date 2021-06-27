// require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
// using your secret key
const stripe = Stripe(process.env.REACT_APP_STRIPE_KEY);



// - app config
const app = express();


// - middlewares
app.use(cors({origin: true}));
app.use(express.json());


// - API routes
app.get('/', (request, response) => response.status(200).send('Hello Backend!!!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    // console.log('Payment Request Recived Wow!!!! for this amount >> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //  if it's going ok (created something)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command but in this case will be function listener
exports.api = functions.https.onRequest(app);
