const express = require('express');
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.urlencoded({extended:false}))


app.use('/add-product',(req,res,next)=>{
    console.log(1)
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Enter Product"><input type="text" name="size placeholder="Enter size"><button>Add Product</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
   res.send("<h1> Welcome to express Home </h1>")
})




app.listen(4000,()=>{
    console.log(`Server is ruuning on port ${4000}`)
})