import express from "express";
import bodyParser from "body-parser";
// import conn from 'conn.js'

import usersroutes from './routes/users.js'
import postroutes from './routes/posts.js'


import mysql from "mysql";




const app = express();


const PORT = 5000;
app.use(bodyParser.json());



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'max_billboard',
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySQL COnnected')
});


app.get('/', (req, res) => {
    res.send("hello")
});

app.use('/posts', postroutes)


app.use('/users', usersroutes)

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))