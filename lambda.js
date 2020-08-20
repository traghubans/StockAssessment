
//Lambda function that accessed the api and returned a response

'use strict';

//Import statements
const alphaVant = require('alphavantage')({key: process.env.APIKEY});
const request = require('request')


//Main Function
exports.handler = (event, context, callback) =>
{
    //Declared Variables
    let symbol = ""
    
    //Get symbol
    console.log(JSON.stringify(event.symbol));
    symbol = event.symbol 
    
    // code to grab the date and search in between dates

    // api request to get the data 
    request(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.APIKEY}`, { json: true }, (err, res, body) => 
    {
        if (err) 
        { 
            return console.log(err); 
        }
        
        // grabbing the array of data 
        console.log(body['Time Series (5min)'])
        
        callback(null,body);
        
    });
    
};
