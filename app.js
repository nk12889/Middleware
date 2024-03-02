const express = require('express');

const app = express();


app.use((req,res,next)=>{
    console.log(1)
    next();
})

app.use((req,res,next)=>{
    console.log(2)
    res.send('we are express js')
})





app.listen(4000,()=>{
    console.log(`Server is ruuning on port ${4000}`)
})