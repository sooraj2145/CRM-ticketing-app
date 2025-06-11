const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');



app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const userRouter = require('./src/routers/user.router.js');
const ticketRouter = require('./src/routers/ticket.router.js');


app.use('/api/user', userRouter);
app.use('/api/ticket', ticketRouter);


app.use((req, res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
    });


const handleError = require('./src/routers/utils/errorHandler.js');
    
app.use((err, req, res, next) => {
    handleError(err, res);
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});