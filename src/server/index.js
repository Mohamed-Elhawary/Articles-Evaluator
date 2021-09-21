const dotenv = require('dotenv')
var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config()

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/add-url', async (req, res) => {
    const {articleUrl} = req.body
    const meaningCloudUrl = `${process.env.MEAN_CLOUD_API_URL}?key=${process.env.MEAN_CLOUD_API_KEY}&url=${articleUrl}&lang=en`
    axios(meaningCloudUrl).then(response => {
        const data = response.data; 
        const {sentence_list, score_tag, agreement, subjectivity, confidence, irony} = data;
        res.send({
            text: sentence_list[0].text || '',
            score_tag: score_tag,
            agreement: agreement,
            subjectivity: subjectivity,
            confidence: confidence,
            irony: irony, 
        })
    }).catch(error => {
        console.log("Error" + error.message)
    }); 
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

module.exports = {app}