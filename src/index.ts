import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { HTTP_PORT } from './config/serverConfig'

import ApiRouter from './api/ApiRouter'

const app = express()

app.use(cors())
app.use(bodyParser.json({
  type: 'application/json'
}))

app.get('/check', (req, res) => {
  res.send('Server is running')
})

app.use('/api/v1', ApiRouter)

app.listen(HTTP_PORT, () => {
  console.log(`Example app listening at http://localhost:${HTTP_PORT}`)
})