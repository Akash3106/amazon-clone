const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51Hcy3jG7r3t1a9levDtqMp1i3B7Bonam3BBP17cg6svYEvhJJ04w6T5FhTMnzDHBJFsqTRxNg0YRMvXsIgbjVev800tRKGhAQD ')

// API

//API config 
const app = express();
//Middleware 
app.use(cors({ origin: true }));
app.use(express.json());

//API route
app.get('/', (request, response) => response.status(200).send("<h1>hello world</h1>"))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment Request recieved BOOM !!! for this amount ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunit in currency
        currency: "inr",
    });


    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//listen commmand   

exports.api = functions.https.onRequest(app)


//Eample Endpoint
//http://localhost:5001/eshop-85231/us-central1/api