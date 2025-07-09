const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: '/tmp' });

app.post('/convert', upload.single('file'), (req, res) => {
  const inputPath = req.file.path;
  const outputPath = `/tmp/${req.file.filename}.mp3`;

  const command = `ffmpeg -f s16le -ar 24000 -ac 1 -i ${inputPath} -codec:a libmp3lame -qscale:a 2 ${outputPath}`;

  exec(command, (error) => {
    if (error) {
      return res.status(500).send('FFmpeg Error: ' + error.message);
    }

    res.download(outputPath, 'output.mp3', () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  });
});

app.get('/', (req, res) => res.send('FFmpeg API is working'));

app.listen(3000, () => console.log('Server running on port 3000'));
