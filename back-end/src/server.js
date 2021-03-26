require('dotenv/config');
const express = require('express');
const morgan = require('morgan');

const handleError = require('./middlewares/error');
const loginRouter = require('./api/controllers/loginController');
const registerRouter = require('./api/controllers/registerController');
const productsRouter = require('./api/controllers/productsController');
const validateToken = require('./middlewares/auth/validateToken');
const orderRouter = require('./api/controllers/orderController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/orders', orderRouter);

app.get('/teste', validateToken, (_req, res) => {
  res.send('validando token');
});

app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'EndPoint não existe' });
});

app.use(handleError);

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}!`));