'use strict';

const _ = require('lodash');
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

    static set(id){
        return smashgg.Set.getSet(id);
    }

    static sets(idArray){
        return Promise.all(idArray.map(id => { return smashgg.Set.getSet(id); }));
    }

    static player(id){
        return smashgg.Player.getPlayer(id);
    }
    
    static players(idArray){
        return Promise.all(idArray.map(id => { return smashgg.Player.getPlayer(id); }));
    }

    static tournamentPhaseGroups(tournamentName, expands){
        return new Promise(function(resolve, reject){
            // /name, expands
            try{
                let Tournament = new smashgg.Tournament(tournamentName, expands);
                Tournament.on('ready', function(){
                    Tournament.getAllPhaseGroups()
                        .then(groups => {
                            let phaseData = groups.map(group => { return group.data; });
                            return resolve(phaseData);
                        })
                        .catch(err => {
                            console.error(err);
                            return reject(err);
                        })
                    
                })
            } catch(err){
                console.error(err);
                return reject(err);
            }
        })
    }

    static eventPhaseGroups(tournamentName, eventName, expands){
        return new Promise(function(resolve, reject){
            //tournamentName, eventName, expands
            try{
                let Event = new smashgg.Event(tournamentName, eventName, expands);
                Event.on('ready', () => {
                    Event.getEventPhaseGroups()
                        .then(groups => { 
                            let phaseData = groups.map(group => { return group.data; });
                            return resolve(phaseData);
                        })
                        .catch(err => {
                            console.error(err);
                            return reject(err);
                        })
                })
            } catch(err){
                console.error(err);
                returnreject(err);
            }
        })
    }

    static eventPhaseGroups(tournamentName, eventName, expands){
        return new Promise(function(resolve, reject){
            //tournamentName, eventName, expands
            try{
                let Event = new smashgg.Event(tournamentName, eventName, expands);
                Event.on('ready', () => {
                    Event.getEventPhaseGroups()
                        .then(groups => { 
                            let phaseData = groups.map(group => { return group.data; });
                            return resolve(phaseData);
                        })
                        .catch(err => {
                            console.error(err);
                            return reject(err);
                        })
                })
            } catch(err){
                console.error(err);
                returnreject(err);
            }
        })
    }

}

module.exports = Smash;