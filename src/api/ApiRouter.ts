import express from 'express'

import AuthenticationRouter from './authentication/AuthenticationRouter'

const ApiRouter = express.Router()

ApiRouter.use('/auth', AuthenticationRouter)

export default ApiRouter
