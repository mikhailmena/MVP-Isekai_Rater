const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
// const config = require('./config')[process.env.NODE_ENV||"dev"]
const {Client} = require('pg');
// const PORT = config.port;
app.use(cors())
app.use(bodyParser())
app.use(express.static('public'))

const client = new Client({
    connectionString: 'postgres://isekaidb_user:RLsF1COjLO1kay2bRSBuFQuwuDKvkUzd@dpg-cd25l0aen0hm1tsdiimg-a.oregon-postgres.render.com/isekaidb', 
    
    ssl: {resolveObjectURL:false},
    port: process.env.PORT
    
});
client.connect();
app.get('/api/ratings', (req, res) => {
    client.query('SELECT * FROM comments').then((result) => {
       res.setHeader('Content-Type', 'application/json');
       res.send(result.rows);  
    })
})

app.post('/api/ratings', (req, res) => {
    let newComment = req.body
    client.query("INSERT INTO comments(description) VALUES ($1);",[newComment.description]).then((data)=>{
        res.send(newComment)
        
    });
});

app.delete('/api/ratings',(req, res)=>{
    let id = req.body.id; 
    client.query('DELETE FROM memo_table WHERE memo_id = $1',[id]).then((data) =>{
        
        res.send()
    })
});





app.listen(PORT, () =>{
    console.log('Listening on port: ', PORT);
});