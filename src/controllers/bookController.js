const BookModel = require('../models/bookModel')


const createBook = async function(req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})

}


const getBookList = async function(req,res){
    let bookList = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: bookList})
}

const getBooksInYear = async function(req,res){
    let yearValue = req.query.year
    let booksInYear = await BookModel.find({year:yearValue})
    res.send({msg: booksInYear})
}

// const getParticularBooks = async function(req,res){
//     let fetch= req.body
//     let particularBook= await bookModel.find({$or:[{bookName:fetch.bookName},{tags:fetch.tags},{totalPages:fetch.totalPages}]})
//     res.send({msg: particularBook})
// }

const getXINRBooks = async function(req,res){
    let XINRBooks = await BookModel.find({$or:[{"prices.indianPrice":"100INR"},{"prices.indianPrice":"200INR"},{"prices.indianPrice":"500INR"}]})

    res.send({msg: XINRBooks})
}
const getRandomBooks = async function(req,res){
    let randomBooks = await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt: 500}}]})
    res.send({msg: randomBooks})
}





module.exports.createBook = createBook
module.exports.getBookList = getBookList
module.exports.getBooksInYear=getBooksInYear
// module.exports.getParticularBooks=getParticularBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks