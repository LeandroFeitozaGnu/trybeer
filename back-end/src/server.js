require('dotenv');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

const loginRouter = require('./api/controllers/loginController');

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}!`));