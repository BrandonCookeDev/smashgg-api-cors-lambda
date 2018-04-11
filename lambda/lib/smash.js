'use strict';

const smashgg = require('smashgg.js');
 
class Smash{
    
    static tournament(tournamentName, expands){
        return new Promise(function(resolve, reject){
            // /name, expands
            try{
                let Tournament = new smashgg.Tournament(tournamentName, expands);
                Tournament.on('ready', function(){
                    return resolve(Tournament.data);
                })
            } catch(err){
                console.error(err);
                return reject(err);
            }
        })
    }
    
    static event(tournamentName, eventName, expands){
        return new Promise(function(resolve, reject){
            //tournamentName, eventName, expands
            try{
                let Event = new smashgg.Event(tournamentName, eventName, expands);
                Event.on('ready', () => {
                    return resolve(Event.data);
                })
            } catch(err){
                console.error(err);
                returnreject(err);
            }
        })
    }
    
    static phase(id, expands){
        return new Promise(function(resolve, reject){
            //id, expands
            try {
                let Phase = new smashgg.Phase(id, expands);
                Phase.on('ready', function(){
                    return resolve(Phase.data);
                })
            } catch(err) {
                console.log(err);
                return reject(err);
            }
        });
    }
    
    static phasegroup(id, expands){
        return new Promise(function(resolve, reject){
            //id, expands
            try {
                let PhaseGroup = new smashgg.PhaseGroup(id, expands);
                PhaseGroup.on('ready', () => {
                    return resolve(PhaseGroup.data);
                })
            } catch(e) {
                console.log(e);
                return reject(e);
            }
        })
    }
    
}

module.exports = Smash;