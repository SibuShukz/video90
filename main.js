const express = require('express')
const app = express()
const port = 3000
const fs =require("fs")
app.use(express.static("public"))
const blog = require('./routes/blog')


app.use('/blog', blog)

//moddleware1- logger for our application
app.use((req,res,next)=>{
    console.log(req.headers)
    req.saurabh="i am saurabh"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//moddleware2
app.use((req,res,next)=>{
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about ' + req.saurabh)
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})