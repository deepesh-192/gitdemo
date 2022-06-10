const authorModel = require("../models/authorModel")

const createAuthor = async function (req,res){
    let author = req.body 
    let authorData = await authorModel.create(author)
    res.send({msg: authorData})
}

const getAuthorData = async function (req,res){ 
    let allAuthors = await authorModel.find()
    res.send({msg: allAuthors})
}



module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData