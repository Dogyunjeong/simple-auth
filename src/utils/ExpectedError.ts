class ExpectedError extends Error {
    private _errMsg: string
    private _statusCode: number
    constructor (errMsg: string, statusCode: number) {
        super(errMsg)
        this._errMsg = errMsg
        this._statusCode = statusCode
    }

    public static STATUS_CODE = {
        INTERNAL_FAILURE: 500,
        CLIENT_PARAM: 400,
    }
}

export default ExpectedError
