// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Stripe Checkout Session Route
app.post('/api/stripe/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

    console.log("Received amount from frontend:", amount);

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ error: 'Invalid amount.' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
            },
            unit_amount: amount * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/donation-success',
      cancel_url: 'http://localhost:3000/donation-cancel',
    });

    // ✅ Send the session ID so frontend can redirect
    res.json({ id: session.id });
  } catch (error) {
    console.error('❌ Stripe Error:', error);
    res.status(500).json({ error: 'Stripe session creation failed.' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
