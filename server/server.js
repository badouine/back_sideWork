import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import router from './router/route.js';
const app = express();

// import connection file
import connect from './database/conn.js';

// app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// app port 
const port = process.env.PORT || 8080;
// routes
app.use('/api', router)
app.get('/', (req, res) => {
    try {
        res.json("Get request")
} catch(err) {
    res.json(err)
}
}
)

// start server only when we have valid connection
connect().then(() => {
    try {
            app.listen(port, () => {
                console.log(`Server connected to http://localhost:${port} `)
            })
    } catch(err) {
        console.log(`Cannot connect to the server`)
    }
}).catch(err => {
    console.log("Invalid DB connection" )
})