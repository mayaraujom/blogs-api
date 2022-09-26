const express = require('express');
require('express-async-errors');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.routes');
const errorMiddleware = require('./middlewares/error');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/user', userRouter);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
