import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for handling CORS Policy
// Option 1: Allow All Origins with Default of cors(*)

    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// Middleware for parsing request body

app.use(express.json());
app.get('/', (request, response) => {
    
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    alert(ip)
    return response.status(234).send("HELOOasaO")
})


app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('Database Connected')
    app.listen(PORT, () => {
        console.log(`App running on port: ${PORT}`);
    })
})
    .catch((error) => {
    console.log(error)
})