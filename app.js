const express = require('express');
const app = express();
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const port = 3000;

app.post('/api/xml-cloud', upload.array('files', 50), (req, res) => {
    console.log(req)
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
