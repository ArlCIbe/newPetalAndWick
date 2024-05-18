const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express();

app.use(cors());
app.use(express.json());



const Candle = require('./candleSchema'); 
const Flower = require('./flowerSchema');
const Order = require('./orderschema');
const Customer = require('./customerSchema')
const Sale = require('./salesSchema');


app.get('/', async (req, res) => {
   res.send('Welcome Petal and Wicks API')
})

app.get('/candles', async (req, res) => {
    try {
        const candles = await Candle.find();
        res.json(candles);
    } catch (error) {
        console.error('Error fetching candles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/flowers', async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.json(flowers);
    } catch (error) {
        console.error('Error fetching flowers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/products/flowers', async (req, res) => {
    try {
        const { img_url, name, quantity, price } = req.body;

        const newFlower = new Flower({
            img_url,
            name,
            quantity,
            price
        });
        await newFlower.save();

        res.status(201).json({ message: 'Flower added successfully', flower: newFlower });
    } catch (error) {
        console.error('Error adding flower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/candles', async (req, res) => {
    try {
      console.log('Fetching candle products...');
      const candles = await Product.find({ type: 'candles' });
      console.log('Candle products:', candles);
      res.status(200).json(candles);
    } catch (error) {
      console.error('Error fetching candles:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/flowers', async (req, res) => {
    try {
      console.log('Fetching flower products...');
      const flowers = await Product.find({ type: 'flowers' });
      console.log('Flower products:', flowers);
      res.status(200).json(flowers);
    } catch (error) {
      console.error('Error fetching flowers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/bundles', async (req, res) => {
    try {
      console.log('Fetching bundles...');
      const bundles = await Product.find({ type: 'bundles' });
      console.log('Bundles:', bundles);
      res.status(200).json(bundles);
    } catch (error) {
      console.error('Error fetching bundles:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/sales', async (req, res) => {
    try {
      console.log('Fetching all sales...');
      const sales = await Sale.find().populate('customer').populate('items');
      console.log('Sales:', sales);
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error fetching sales:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  app.post('/api/products', async (req, res) => {
    try {
        const products = req.body; // Assuming an array of products is sent in the request body
        const result = await Product.insertMany(products);
        console.log('Products added successfully:', result);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error adding products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/products/candles', async (req, res) => {
    try {
        const { img_url, name, quantity, price } = req.body;
        const newCandle = new Candle({
            img_url,
            name,
            quantity,
            price
        });
        await newCandle.save();

        res.status(201).json({ message: 'Candle added successfully', candle: newCandle });
    } catch (error) {
        console.error('Error adding candle:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post('/orders', async (req, res) => {
    try {
       const orderBody = req.body
       await Order.insertMany(orderBody)
       res.send(orderBody)
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/checkout', async (req, res) => {
    try {
      const { customer, items, total } = req.body;
      res.status(200).json({ message: 'Checkout successful' });
    } catch (error) {
      console.error('Error processing checkout:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});