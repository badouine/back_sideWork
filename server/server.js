import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import router from './router/route.js';
const app = express();

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

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`)
})