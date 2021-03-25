module.exports = {
  BAD_REQUEST: {
    code: 400,
    message: 'Invalid Entries. Try again.',
    error: true,
  },
  CONFLICT: {
    code: 409,
    message: 'Email already registered',
    error: true,
  },
  USER_NOT_FOUND: {
    code: 401,
    message: 'Usuário não cadastrado.',
    error: true,
  },
  SQL_ERROR: {
    code: 500,
    message: 'Erro interno',
    error: true,
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'Token inválido ou não informado',
    error: true,
  },
  SUCCESFULLY_LOGIN: {
    code: 200,
    message: 'Login efetuado com sucesso',
    error: false,
  },
  CREATED: {
    code: 201,
    message: 'Usuário cadastrado',
    error: false,
  },
};