const express = require('express') // or import('express')
const app = express()
const port = 3000 // random number for the gate that the server can run separatedly


//route of a website: to orient the website (dinhj huong website)
app.get('/', (req, res) => {
  res.send("Hello World! I'm Bach") //respond with astring contains "..." after receiving the request
})

app.get('/about', (req, res) => {
    res.send("Welcome in!")
  })


//callback function
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})