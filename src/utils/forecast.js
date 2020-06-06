const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/9c41f505fcee9939630823a5812aeb32/' + latitude + ',' + longitude;

    request({ url, json: true}, (error, { body })=> {        

        if(error) {

            callback("Unable to connect to weather service!", undefined)

        }else if(body.error) {

            callback ("Unable to find location", undefined)

        }else {
            
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is " + body.currently.precipProbability + " % chance of rain today. " + body.daily.summary + " The visibility of our beautiful sky is of" + " " + body.currently.visibility + ".")
        }
    })
}

module.exports = forecast;