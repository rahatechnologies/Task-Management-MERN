import express from 'express';
import { authRoutes } from './routes/auth.js';
import { tasksRoutes } from './routes/tasks.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
// mongoose.connect('');

const port = 3000;

// app.get('/',(req,res)=>{
//     res.send('Running')
// })





// enable CORS for frontend running on localhost:3000
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
// middleware to parse JSON
app.use(express.json());


// Express Route configuration / Route handlers
app.use('/', authRoutes);
app.use('/tasks', tasksRoutes);

app.listen(port,()=>{
    console.log(`Server running at port : ${port}`);
    
})