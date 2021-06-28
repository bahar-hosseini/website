import express from "express"
import path from 'path'
import dirname from 'path'
import dotenv from 'dotenv'
import {notFound,errorHandler} from './server/middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import routePost from './server/routes/routePost.js'


dotenv.config()

connectDB()

const app = express()


app.use(express.json());

app.use('/',routePost)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))