const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 5000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});