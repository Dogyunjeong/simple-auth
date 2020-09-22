namespace DynamoDBTypes {
    export interface CreateParams {
        TableName: string,
        Item: { [key:string]: any }
    }

    export interface GetPram {
        TableName: string,
        Key: { [key:string]: any }
    }
}

export default DynamoDBTypes
