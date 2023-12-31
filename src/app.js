const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))
app.use(express.json());

app.get('/messages' , async (req, res) => {
 
})

app.listen(port, () => {
    console.log('server is up on port' + port);
})