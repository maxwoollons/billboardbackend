import express from "express";
import mysql from "mysql";
import cors from "cors";





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


const router = express.Router();

router.use(cors());

router.get('/', (req,res) => {
    let sql = 'SELECT * FROM users LIMIT 100'
    let query = db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.json(results);
    })
})


router.put('/add',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    let sql = "INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, '" + username + "', '" + password + "')";
    let query = db.query(sql, (err,results) => {
        if(err) throw err;
        res.json(results);
    })
})


router.get('/:int', (req,res) => {
    let sql = `SELECT * FROM users WHERE ID = ${req.params.int}`
    let query = db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.json(results);
    })
})




export default router;