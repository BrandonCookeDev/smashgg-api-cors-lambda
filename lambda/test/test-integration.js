'use strict';

let chai = require('chai');
let request = require('request-promise');
let smashgg = require('smashgg.js');
let expect = chai.expect;

let expected = {};
const TOURNAMENT_NAME = 'to12';
const EVENT_NAME = 'melee-singles';
const PHASE_ID = 132397;
const PHASE_GROUP_ID = 373938;

let lambda = require('../lambda');

const API_URL = 'https://i9nvyv08rj.execute-api.us-west-2.amazonaws.com/prod/smashgg-lambda';

describe('smashgg-api-lambda integration test', function(){

    before(async function(){
        this.timeout(20000);
        console.log('Beginning Setup...')

        await Promise.all([
            getTournament(TOURNAMENT_NAME).then(data => {expected.tournament = data}),
            getEvent(TOURNAMENT_NAME, EVENT_NAME).then(data => {expected.event = data}),
            getPhase(PHASE_ID).then(data => {expected.phase = data}),
            getPhaseGroup(PHASE_GROUP_ID).then(data => {expected.phasegroup = data})
        ]);
        console.log('expected:', expected);
        console.log('Setup done.');
        return true;
    });

    it('should process a tournament POST request correctly', async function(){
        this.timeout(10000);

        let options, data;
        options = {
            uri: API_URL,
            method: 'POST',
            body: {
                type: 'tournament',
                tournamentName: 'to12',
                expands: {}
            },
            json: true
        };
        data = await request(options);
        expect(data).to.deep.equal(expected.tournament.data);
        return true;
    });

    it('should process an event POST request correctly', async function(){
        this.timeout(10000);

        let options, data;
        options = {
            uri: API_URL,
            method: 'POST',
            body: {
                type: 'event',
                tournamentName: 'to12',
                eventName: 'melee-singles',
                expands: {}
            },
            json: true
        };
        data = await request(options);
        expect(data).to.deep.equal(expected.event.data);
        return true;
    });

    it('should process a phase POST request correctly', async function(){
        this.timeout(10000);

        let options, data;
        options = {
            uri: API_URL,
            method: 'POST',
            body: {
                type: 'phase',
                id: PHASE_ID,
                expands: {}
            },
            json: true
        };
        data = await request(options);
        expect(data).to.deep.equal(expected.phase.data);
        return true;
    });

    it('should process a phase group POST request correctly', async function(){
        this.timeout(10000);

        let options, data;
        options = {
            uri: API_URL,
            method: 'POST',
            body: {
                type: 'phasegroup',
                id: PHASE_GROUP_ID,
                expands: {}
            },
            json: true
        };
        data = await request(options);
        expect(data).to.deep.equal(expected.phasegroup.data);
        return true;
    })

});

function getTournament(tournamentName){
    return new Promise(function(resolve, reject){
        let t = new smashgg.Tournament(tournamentName);
        t.on('ready', function(data){
            resolve(t);
        });
    })
}

function getEvent(tournamentName, eventName){
    return new Promise(function(resolve, reject){
        let e = new smashgg.Event(tournamentName, eventName);
        e.on('ready', function(){
            resolve(e);
        });
    })
}

function getPhase(id){
    return new Promise(function(resolve, reject){
        let p = new smashgg.Phase(id);
        p.on('ready', function(){
            resolve(p);
        });
    })
}

function getPhaseGroup(id){
    return new Promise(function(resolve, reject){
        let pg = new smashgg.PhaseGroup(id);
        pg.on('ready', function(){
            resolve(pg);
        });
    })
}
