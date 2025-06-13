require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');



app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
if(process.env.NODE_ENV === 'production') {
  const mDb = mongoose.connection;
  mDb.on("open", () => {
  console.log("MongoDB connection is open");
});
  mDb.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
}


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


const handleError = require('./src/utils/errorHandler.js');
    
app.use((err, req, res, next) => {
    handleError(err, res);
}
);

