import express from 'express'
import AuthenticationHandler from './AuthenticationHandler'

const AuthenticationRouter = express.Router()
const authenticationHandler = new AuthenticationHandler()

AuthenticationRouter.post('/sign-up', authenticationHandler.signUp)

export default AuthenticationRouter
