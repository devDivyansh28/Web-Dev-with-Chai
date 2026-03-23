
class ApiError extends Error{
    
    constructor(statuscode,message){
        super(message),
        this.stauscode = statuscode,
        this.isOperational = true,
        Error.captureStackTrace(this,this.constructor)
    }

    static badRequest(message="Bad request"){
        return new ApiError(400,message);
    }

    static unauthorized(message="Unauthorized"){
        return new ApiError(401,message)
    }

    static conflict(message="conflict"){
        return new ApiError(409,message)
    }

}

export default ApiError;