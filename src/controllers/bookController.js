const bookModel = require('../models/bookModel')


const createBook = async function(req,res){
    let book = req.body
    let bookData = await bookModel.create(book)
    res.send({msg: bookData})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}





module.exports.createBook = createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails