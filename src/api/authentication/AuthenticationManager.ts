import AuthenticationController from './AuthenticationController'
import ExpectedError from '../../utils/ExpectedError'
import { saltPassword } from '../../utils/authUtils'

class AuthenticationManager {
    private _authenticationController: AuthenticationController
    constructor (
        authenticationController: AuthenticationController = new AuthenticationController()
    ) {
        this._authenticationController = authenticationController
    }

    public signUp = async ({ username, password }: { username: string, password: string }) => {
        const existingAuth = await this._authenticationController.getByUsername(username)
        if (existingAuth) {
            throw new ExpectedError('Username is already in used', ExpectedError.STATUS_CODE.CLIENT_PARAM)
        }
        const saltedPassword = await saltPassword(password)
        return this._authenticationController.signUp({ username, saltedPassword })
    }

    public signIn = async ({ username, password }: { username: string, password: string }) => {
        const saltedPassword = await saltPassword(password)
        return this._authenticationController.signIn({ username, saltedPassword })
    }
}

export default AuthenticationManager
