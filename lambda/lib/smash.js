'use strict';

const _ = require('lodash');
const smashgg = require('smashgg.js');
 
class Smash{

    static tournament(tournamentName, expands){
        return smashgg.Tournament.getTournament(tournamentName, {expands: expands})
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }
    
    static event(tournamentName, eventName, expands){
        return smashgg.Event.getEvent(eventName, tournamentName, {expands: expands})
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }
    
    static phase(id, expands){
        return smashgg.Phase.getPhase(id, {expands: expands})
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }
    
    static phasegroup(id, expands){
        return smashgg.PhaseGroup.getPhaseGroup(id, {expands: expands})
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }

    static set(id){
        return smashgg.Set.getSet(id)
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }

    static sets(idArray){
        return Promise.all(idArray.map(id => { return smashgg.Set.getSet(id); }))
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }

    static player(id){
        return smashgg.Player.getPlayer(id)
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
    }
    
    static players(idArray){
        return Promise.all(idArray.map(id => { return smashgg.Player.getPlayer(id); }))
            .catch((e) => { 
                console.error(err);
                throw (err);
            })
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