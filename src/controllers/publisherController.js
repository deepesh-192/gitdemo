const publisherModel = require("../models/publisherModel")

const createPublisher = async function (req,res){
    let publisher = req.body 
    let publisherData = await publisherModel.create(publisher)
    res.send({msg: publisherData})
}

const getPublisherData = async function (req,res){ 
    let allPublishers = await publisherModel.find()
    res.send({msg: allPublishers})
}



module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData