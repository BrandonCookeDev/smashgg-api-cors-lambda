'use strict';

let smashgg = require('./lib/smash');

exports.run = async function(request){
    try{
        let data;
        switch(request.type){
            case 'tournament':
                data = await smashgg.tournament(
                    request.tournamentName, 
                    request.expands
                );
                break;
            case 'event':
                data = await smashgg.event(
                    request.tournamentName,
                    request.eventName,
                    request.expands
                );
                break;
            case 'phase':
                data = await smashgg.phase(
                    request.id,
                    request.expands
                );
                break;
            case 'phasegroup':
                data = await smashgg.phasegroup(
                    request.id,
                    request.expands
                );
                break;
            case 'set':
                data = await smashgg.set(request.id);
                break;
            case 'sets': 
                data = await smashgg.sets(request.idArray);
                break;
            case 'player': 
                data = await smashgg.player(request.id);
                break;
            case 'players': 
                data = await smashgg.player(request.idArray);
                break;
            default:
                throw new Error('not a valid resource: ' + request.type);
        }
        return data;
    } catch(e){
        console.error(e);
        throw e;
    }
}