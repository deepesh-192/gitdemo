let axios = require("axios");



let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getCovidCenters = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are:${district_id},${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let weather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = [ ]

        // let id = req.query.q
        //let app=req.query.appid 

        // console.log(`query params are: ${id},${app}`)
        for (i=0; i<cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=be789124d6fdc0299be6bcaccec19512`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        //var options = {
        //  method: "get",
        //url: `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${app}`
        console.log(sorted)
        //let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({status:true, data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let mame = async function (req, res) {
    try {

        // let id = req.query.template_id
        // let text=req.query.text0
        // let text1=req.query.text1

        //console.log(`query params are: ${id},${text},${text1}`)
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=function&text1=yes&username=chewie12345&password=meme@123`

        }
        let result = await axios(options)
        // console.log(result.data)
        res.send({ data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}






let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getCovidCenters = getCovidCenters
module.exports.weather = weather
module.exports.mame = mame
