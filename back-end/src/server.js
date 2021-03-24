require('dotenv/config');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const loginRouter = require('./api/controllers/loginController');
const validateToken = require('./auth/validateToken');

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRouter);

app.get('/teste', validateToken, (req, res) => {
  res.send('validando token');
});

app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'EndPoint não existe' });
});

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}!`));