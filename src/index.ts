import express from 'express'
import cors from 'cors'
import { HTTP_PORT } from './config/serverConfig'

const app = express()

app.use(cors())

app.get('/check', (req, res) => {
  res.send('Server is running')
})

app.listen(HTTP_PORT, () => {
  console.log(`Example app listening at http://localhost:${HTTP_PORT}`)
})