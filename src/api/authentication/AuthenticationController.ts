import DynamoDB from '../../db/DynamoDB'
import AuthenticationType from '../../types/AuthenticationType'

class AuthenticationController {
    private _dynamoDB: DynamoDB
    constructor (
        dynamoDB: DynamoDB = new DynamoDB()
    ) {
        this._dynamoDB = dynamoDB
    }
    public signUp = async ({ username, saltedPassword }: { username: string, saltedPassword: string }): Promise<void> => {
        await this._dynamoDB.create({
            TableName: 'user',
            Item: {
                username,
                saltedPassword,
            }
        })
        return
    }

    public getByUsername = (username: string): Promise<AuthenticationType.Auth> => {
        return this._dynamoDB.get<AuthenticationType.Auth>({
            TableName: 'user',
            Key: {
                username,
            }
        })
    }

    public signIn = ({ username, saltedPassword }: { username: string, saltedPassword: string }): Promise<AuthenticationType.Auth> => {
        console.log('Authentication controller sign up')
        const data = this._dynamoDB.get<AuthenticationType.Auth>({
            TableName: 'user',
            Key: {
                username,
                saltedPassword,
            }
        })
        return data
    }
}

export default AuthenticationController

