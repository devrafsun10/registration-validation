let registrationController = (req,res) => {

    let {username,password,email} = req.body

    let errros = []

    if (!username){
        errros.push({
            errorType: "username",
            message : "username is required"
        })
    }
    if (!email){
        errros.push({
            errorType: "email",
            message : "email is required"
        })
    }
    if (!password){
        errros.push({
            errorType: "password",
            message : "password is required"
        })
    }
     
    res.status(errros.length === 0 ? 201 : 400).send({
        success : errros.length === 0 ? true : false,
        message : errros.length === 0 ? "registration successful" : "registration failed",
        errors :  errros.length === 0 ? null : errros
    });
}

module.exports = {registrationController}