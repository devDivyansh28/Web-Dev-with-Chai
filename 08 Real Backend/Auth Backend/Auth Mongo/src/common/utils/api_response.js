// Standarization of all req , responses and errors is necessary so they will be standardized in common module as they can be used by any module will be required by every module...
// And Remember classes are best friend for writing these...

class ApiResponse{

    static ok(res,message,data=null){
        return res.status(200).json({
            sucess:true,
            message,
            data
        })
    }
    
    static created(res,message,data=null){
        return res.status(201).json({
            sucess:true,
            message,
            data
        })
    }

    static noContent(res){
        return res.status(204).send()
    }
    
    // This is not limited to these object's we will add more in future...

}

export default ApiResponse;