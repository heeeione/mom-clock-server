const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 4000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
