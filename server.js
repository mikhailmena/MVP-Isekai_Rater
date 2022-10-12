const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')[process.env.NODE_ENV||"dev"]
const {Client} = require('pg');
const { dev } = require('./config');
const PORT = config.port;

// ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
// app.use(bodyParser())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const client = new Client({
    connectionString: config.connectionString
    
});
client.connect();
app.get('/api/ratings', (req, res) => {////DO NOT CHANGE APP.GET ROUTE/////
    client.query('SELECT * FROM my_ratings').then((result) => {
       res.setHeader('Content-Type', 'application/json');
       res.send(result.rows);  
    })
})
app.get('/api/user/ratings', (req, res) => {////DO NOT CHANGE APP.GET ROUTE/////
    client.query('SELECT * FROM user_ratings').then((result1) => {
       res.setHeader('Content-Type', 'application/json');
       res.send(result1.rows);  
    })
})

app.post('/api/ratings', (req, ) => {////DO NOT CHANGE APP.POST ROUTE////
    // res.setHeader('Content-Type','application/json')
    for (let isekaiName in req.body) {//isekaiName is keys object
        // console.log(req.body[isekaiName]) //req.body[isekaiName] is values of object
        client.query("INSERT INTO user_ratings(isekainame,user_rating) VALUES ($1,$2);",[isekaiName,req.body[isekaiName]]).then((data)=>{
        // res.send(req.body)
    
        console.log(req.body)

    });

    };
   
    
});

// app.delete('/api/ratings',(req, res)=>{
//     let id = req.body.id; 
//     client.query('DELETE FROM my_ratings WHERE memo_id = $1',[id]).then((data) =>{
        
//         res.send()
//     })
// });





// app.listen(PORT, () =>{
//     console.log('Listening on port: ', PORT);
// });

app.listen(8002, function(){
    console.log("server is running")
})