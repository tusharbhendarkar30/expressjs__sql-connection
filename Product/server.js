const express = require('express')
const mysql2 = require('mysql2')
const app = express()
const bodyparser = require('body-parser')
const productRouter = require('./router/product')


app.use(bodyparser.json())

app.use(productRouter)

app.listen(3000,'0.0.0.0',()=>{
    console.log('Server start at 3000')
})