require('dotenv/config');
const express = require('express');
const morgan = require('morgan');

const handleError = require('./middlewares/error');
const loginRouter = require('./api/controllers/loginController');
const registerRouter = require('./api/controllers/registerController');
const validateToken = require('./middlewares/auth/validateToken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.get('/teste', validateToken, (req, res) => {
  res.send('validando token');
});

app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'EndPoint não existe' });
});

app.use(handleError);

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}!`));