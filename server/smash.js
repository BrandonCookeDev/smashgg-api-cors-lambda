'use strict';

const smashgg = require('smashgg.js');
 
class Smash{
    
    static async tournament(req, res){
        // /name, expands
        try{
            let tournamentName = req.body.tournamentName;
            let expands = req.body.expands;
            
            let Tournament = new smashgg.Tournament(tournamentName, expands);
            Tournament.on('ready', function(){
                res.status(200).send(Tournament.data);
            })
            
        } catch(err){
            console.error(err);
            res.sendStatus(500);
        }
    }
    
    static async event(req, res){
        //tournamentName, eventName, expands
        try{
            let tournamentName = req.body.tournamentName;
            let eventName = req.body.eventName;
            let expands = req.body.expands;
            
            let Event = new smashgg.Event(tournamentName, eventName, expands);
            Event.on('ready', () => {
                res.status(200).send(Event.data);
            })
        } catch(err){
            console.error(err);
            return res.sendStatus(500);
        }
    }
    
    static async phase(req, res){
        //id, expands
        try {
            let id = req.body.id;
            let expands = req.body.expands;
            
            let Phase = new smashgg.Phase(id, expands);
            Phase.on('ready', function(){
                res.status(200).send(Phase.data);
            })
            
        } catch(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        
    }
    
    static async phasegroup(req, res){
        //id, expands
        try {
            let id = req.body.id;
            let expands = req.body.expands;
            
            let PhaseGroup = new smashgg.PhaseGroup(id, expands);
            PhaseGroup.on('ready', () => {
                res.status(200).send(PhaseGroup.data);
            })
        } catch(e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
    
}

module.exports = Smash;