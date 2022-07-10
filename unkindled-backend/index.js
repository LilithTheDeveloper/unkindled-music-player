const express = require('express')
const cors = require('cors')
const helper = require('./music-registration.js');

const app = express()
const port = 8000

app.use(cors())

helper.registerMusic()
const filesJson = helper.loadMusicJson();

console.log(filesJson)

app.get('/api/songs', (req, res) => {
  console.log(`Received a request by ${req}}`)
  res.send(filesJson)
})

app.patch('/api/songs', (req, res) => {

})

app.post('/api/songs', (req, res) => {
  if(!req.files){
    return res.status(400).send('No files were uploaded.');
  }

  const myFile = req.files.file;

  myFile.mv('./public/music/' + myFile.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  });
})

app.get('/api/getsong', (req, res) => {
  res.sendFile(__dirname + '/public/music/' + req.query.song)
})

app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})
