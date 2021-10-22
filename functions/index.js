const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51Jib7uSJZZQNAnDhbORItZQMApHFPqrQgxW53uMJ3qjzg1wkFXyqv542kKaH1zjUsM7XnMi9Tpx7HORXmSg3eEZY0071kkCVAW')

// API

// App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request,response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response)=>{
    const total= request.query.total;

    console.log('Payment Request Recieved BOOM! for this amaount >>> ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "inr",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/indian-tadka-resto/us-central1/api