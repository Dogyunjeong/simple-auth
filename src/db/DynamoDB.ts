import AWS from 'aws-sdk'
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service'
import { DYNAMO_REGION, DYNAMO_HOST, AWS_ACCESS_KEY, AWS_CREDENTIAL_KEY } from '../config/awsConfig'
import DynamoDBTypes from '../types/db/dynamoDBTypes'

AWS.config = new AWS.Config()
AWS.config.accessKeyId = AWS_ACCESS_KEY
AWS.config.secretAccessKey = AWS_CREDENTIAL_KEY

class DynamoDB {
    private _docClient: AWS.DynamoDB.DocumentClient
    constructor (
        dynamoConfig: ServiceConfigurationOptions = {
            region: DYNAMO_REGION,
            endpoint: DYNAMO_HOST,
        }
    ) {
        this._docClient = new AWS.DynamoDB.DocumentClient( {
            ...dynamoConfig,
            convertEmptyValues: true
        });
    }
    public create = (params: DynamoDBTypes.CreateParams): Promise<any> => {
        return new Promise((resolve, reject) => {
            this._docClient.put(params, (err, data) => {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(`Failed to create item for ${JSON.stringify(params.Item, null, 3)}`)
                } else {
                    resolve(data)
                }
            })
        })

    }

    public get = <T extends any>(params: DynamoDBTypes.GetPram): Promise<T> => {
        return new Promise((resolve, reject) => {
            this._docClient.get(params, (err, data: T) => {
                if (err) {
                    console.error("Unable to get item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(`Failed to get item for ${JSON.stringify(params.Key, null, 3)}`)
                } else {
                    resolve(data)
                }
            })
        })
    }
}

export default DynamoDB
