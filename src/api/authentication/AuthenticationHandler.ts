import { RequestHandler } from 'express'
import AuthenticationManager from './AuthenticationManager'
import ExpectedError from '../../utils/ExpectedError'
import _ from '../../utils/lodash'

const MAX_USERNAME_LENGTH = 20
const MAX_PASSWORD_LENGTH = 20
const MIN_PASSWORD_LENGTH = 6

class AuthenticationHandler {
    private _authenticationManager: AuthenticationManager
    constructor (
        authenticationManager: AuthenticationManager = new AuthenticationManager()
    ) {
        this._authenticationManager = authenticationManager
    }
    private _checkUsername = (username: string) => {
        let err: string = null
        if (!username) {
            err = 'Username is missing'
            return err
        }
        if (!_.isString(username)) {
            err = 'Username must be string'
            return err
        }
        if (username.length > MAX_USERNAME_LENGTH) {
            err = 'Username is allowed up to 20 characters'
            return err
        }
        return
    }

    private _checkPassword = (password: string) => {
        let err: string = null
        if (!password) {
            err = 'Password is missing'
            return err
        }
        if (!_.isString(password)) {
            err = 'Password must be string'
            return err
        }
        if (password.length < MIN_PASSWORD_LENGTH) {
            err = 'Password must be more than 6 characters'
            return err
        }
        if (password.length > MAX_PASSWORD_LENGTH) {
            err = 'Password is allowed up to 20 characters'
            return err
        }
        return
    }
    public signUp: RequestHandler = async (req, res) => {
        const { username, password } = req.body
        console.log(req.body)
        const errInUsername = this._checkUsername(username)
        const errInPassword = this._checkPassword(password)
        if (errInPassword || errInUsername) {
            res.statusCode = 400
            return res.json({
                error: errInUsername || errInPassword
            })
        }
        try {
            await this._authenticationManager.signUp({ username, password })
            res.json({ msg: 'Successfully signed up'})
        } catch (err) {
            res.statusCode = 500
            res.json({
                msg: err.message || 'Failed to sign up'
            })
        }
    }

    public signIn: RequestHandler = async (req, res) => {
        const { username, password } = req.query as {
            username: string, password: string
        }
        
        const errInUsername = this._checkUsername(username)
        const errInPassword = this._checkPassword(password)
        if (errInPassword || errInUsername) {
            res.statusCode = 400
            return res.json({
                error: errInUsername || errInPassword
            })
        }
        try {
            await this._authenticationManager.signIn({ username, password })
            return res.json({
                msg: 'Successfully signed in'
            })
        } catch (err) {
            res.statusCode = 500
            res.json({
                msg: err.message || 'Failed to sign in'
            })
        }
    }
}

export default AuthenticationHandler