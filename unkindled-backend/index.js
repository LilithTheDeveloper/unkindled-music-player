const express = require('express')
const cors = require('cors')
const helper = require('./music-registration.js');

const app = express()
const port = 8000

app.use(cors())

helper.registerMusic()
const filesJson = helper.loadMusicJson();

console.log(filesJson)

app.get('/api/getmusiclist', (req, res) => {
  console.log(`Received a request by ${req}}`)
  res.send(filesJson)
})

app.get('/api/getsong', (req, res) => {
  res.sendFile(__dirname + '/public/music/' + req.query.song)
})

app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})
