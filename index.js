import express from "express";
import bodyParser from "body-parser";

import usersroutes from './routes/users.js'

const app = express();

const PORT = 5000;
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("hello")
});


app.use('/users', usersroutes)

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))