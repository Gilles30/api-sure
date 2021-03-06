const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 8877
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hellow how are you?')
})

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/src/server/data.json')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
