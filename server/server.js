import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
const app = express();

// app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// app port 
const port = process.env.PORT || 8080;
// routes
app.get('/', (req, res) => {
    try {
        res.json("Get request")
} catch(err) {
    res.json(err)
}
}
)

app.listen(8080, () => {
    console.log(`Server connected to http://localhost:${port}`)
})