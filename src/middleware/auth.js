// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token
// let token=req.header["x-auth-token"]
// if(!token){res.send({status:false,msg:"token must be present"})}
// else{
//     next()
// }
    
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     let token=req.header["x-auth-token"];
//     let decumentToken=jwt.verify(token,"functionup-radon")
//     let modify=req.param.userid;
//     let loginUser=decodedToken.userid
//     if(modify !=loginUser){
//         return res.send({status:false,msg:"modified usre must be logger"})
//     }
//     next()
// }
// module.exports.authenticate=authenticate
// module.exports.authorise=authorise