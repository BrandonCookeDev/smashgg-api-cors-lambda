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

        let data = await main.run();
        callback(null, data);
    } catch(e){
        console.error(e);
        callback(e, null)
    }

}