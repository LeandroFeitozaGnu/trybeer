const registerRouter = require('express').Router();
const Service = require('../services/registerService');

registerRouter.post('/', async (req, res, next) => {
try {
    const { name, email, password, role } = req.body;
    await Service.registerUser(name, email, password, role);
    
    res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
} catch (error) {
   next({
    statusCode: 500,
    errorMessage: (error.code === 'ER_DUP_ENTRY') ? 'Email já cadastrado' : 'Erro Interno',
    error,
   });
}
});

module.exports = registerRouter;