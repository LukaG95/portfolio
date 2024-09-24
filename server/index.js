const path = require('path');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 5000;
require('./startup/routes')(app);
require('./startup/db')();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});