//External Modules
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';

//Internal Modules
import routePost from './routes/routePost.js';

dotenv.config();

connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '/'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', routePost);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Api is running');
  });
}

// app.use(notFound)
// app.use(errorHandler)

process.on('uncaughtException', function (err) {
  console.log(err);
});

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
