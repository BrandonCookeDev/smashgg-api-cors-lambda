'use strict';

var main = require('./main');

// Lambda wrapper for main.
exports.handler = async function(event, context, callback) {
    try{
        process.on('unhandledRejection', function(e){
            console.error(e.stackTrace);
            callback(e, null);
            process.exit(1);
        });

        console.log('smashgg-lambda called')
        console.log('event:', event);
        console.log('context:', context);

        let input = event.body ? event.body : event;
        console.log('input:', input);
        input = typeof(input) === 'string' ? JSON.parse(input) : input;

        //Get data and return
        let data = await main.run(input);
        console.log('returning data:', data);

        let response = {
            statusCode: 200,
            headers: {
                "x-custom-header" : "my custom header value"
            },
            body: JSON.stringify(data)
        };
        callback(null, response);
    } catch(e){
        console.error(e);
        callback(e, null)
    }

}