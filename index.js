const express = require('express')
const app = express() 
const mongoose = require('mongoose')
require('dotenv/config');
const postRouter = require('./Routes/posts')
 
app.use(express.json());
const port = 3000;

mongoose.connect( process.env.DB_CONNECTION, {
    useNewUrlParser : true,
    useUnifiedTopology: true
  
}).then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.log(err)
});


app.get("/",(req,res)=>{
    res.send('HELLO CHARAN');
})
app.use('/posts',postRouter);


app.listen(port,()=>{
    console.log(`added express http://localhost:${port}`)})
