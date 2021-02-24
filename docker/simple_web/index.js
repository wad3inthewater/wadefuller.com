const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('talk no justu!!');
});

app.listen(8080, () => {
  console.log('listening on part 8080');
});