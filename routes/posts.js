import express from "express";
import mysql from "mysql";




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

router.get('/', (req,res) => {
    let sql = 'SELECT * FROM posts LIMIT 100'
    let query = db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.json(results);
    })
})

router.get('/:id', (req,res) => {
    let sql = `SELECT * FROM posts WHERE ID = ${req.params.id}`
    let query = db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.json(results);
    })
})


export default router;