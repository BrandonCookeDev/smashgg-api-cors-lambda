# smashgg-api-cors-server

The smashgg-api-cors-server is a simple express server built to serve as a CORS-supported middleware in order to access the [smashgg.js](https://github.com/BrandonCookeDev/smashgg-promise) library.

## Contents
- [Endpoints](#endpoints)
- [Example](#example)

## Endpoints
The base url for the server is:
```javascript
var base = 'http://smashggcors.us-west-2.elasticbeanstalk.com';
```
The smashgg cors server currently supports 4 endpoints:
#### Tournament
```javascript
var endpoint = base + '/tournament';
```
#### Event
```javascript
var endpoint = base + '/event';
```
#### Phase
```javascript
var endpoint = base + '/phase';
```
#### Phase Group
```javascript
var endpoint = base + '/phasegroup';
```

## Example 
```javascript
var request = function(type, url, data){
    return new Promise(function(resolve, reject){
        var xhttp = new XMLHttpRequest();
        //Promisfy xhr...
    });
}

var url = 'http://smashggcors.us-west-2.elasticbeanstalk.com/tournament'
var postParams = {
    tournamentName: tournamentName,
    expands: expands
}
request('POST', url, postParams)
    .then(function(data){
        return data);
    })
    .catch(function(err){
        console.error('Smashgg Tournament: ' + err);
    })
```

