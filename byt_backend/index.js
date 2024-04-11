const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/buildyourtest');
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/question', async (req,res)=>{
    try {
        console.log(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({error:'Error creating Question'})
    }
})

app.listen(PORT, () => {
    console.log("Server Started.");
});

