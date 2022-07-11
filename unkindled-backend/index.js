const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: './public/music' })
const fs = require('fs');
const helper = require('./music-registration.js');

const app = express()
const port = 8000

app.use(cors())

helper.registerMusic()
const filesJson = helper.loadMusicJson();

app.use((err, req, res, next)=> {
  if(err) console.log(err);
  next();
});


app.get('/api/songs', (req, res) => {
  console.log(`Received a request by ${req}}`)
  res.send(filesJson)
})

app.patch('/api/songs', (req, res) => {

})

app.post('/api/songs', upload.single('file'),(req, res) => {
  console.log("Received a new song");
  if(!req.file){
    return res.status(400).send('No files were uploaded.');
  }

  const myFile = req.file;

  console.log(myFile)

  fs.renameSync(myFile.path, myFile.path.replace(`${myFile.filename}`, `${myFile.originalname}`), (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    helper.registerMusic();
    res.status(200).send('File uploaded!');
  });
});

app.use(express.static('./public'))

app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})
