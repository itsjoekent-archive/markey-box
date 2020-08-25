const express = require('express');
const secure = require('express-force-https');

const app = express();

app.use(secure);
app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile('./build/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
