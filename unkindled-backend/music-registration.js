const fs = require('fs')
const crypto = require('crypto');

var filesJson = loadMusicJson();

exports.registerMusic = function() {
  const dir = './public/music/'
  var count = 0;

  fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    console.log("Currently saved: " + filesJson.length);

    files.forEach(file => {
      if(!isFileRegistered(file)){
        var fileObject = {
          hash: getFileHash(dir + file),
          name: file,
          path: dir + file,
          displayname: file.replace('.mp3', '')
        }
        filesJson.push(fileObject);
        count++;
        console.log(`File ${file} registered`);
      }
      else{
        console.log('File already registered');
      }
    });

    if(count > 0){
      saveMusicJson();
    }
    else{
      console.log('No new files registered');
    }
  });
}

function loadMusicJson(){
  if (fs.existsSync('files.json') && fs.statSync('files.json').size > 0) {
    return JSON.parse(fs.readFileSync('files.json', 'utf8'));
  }
  else {
    return [];
  }
}

function saveMusicJson(){
  fs.writeFile('files.json', JSON.stringify(filesJson), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function isFileRegistered(file){
  var fileHash = getFileHash('./public/music/' + file);
  for(var i = 0; i < filesJson.length; i++){
    if(filesJson[i].hash == fileHash){
      return true;
    }
  }
  return false;
}


function getFileHash(path){
  const cFile = fs.readFileSync(path, 'utf8')
  const fileHash = crypto.createHash('sha256').update(cFile).digest('hex');
  return fileHash;
}

exports.loadMusicJson = loadMusicJson;