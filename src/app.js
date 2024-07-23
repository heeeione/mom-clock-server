require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const smsRouter = require('./routes/sms');

app.use(cors());
app.use(bodyParser.json());
app.use('/sms', smsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
