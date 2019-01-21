'use strict';
Promise = require('bluebird')
const request = require('request-promise')
const prompt = Promise.promisifyAll(require('prompt'))
const slugRegex = new RegExp(/[\S]*api.smash.gg\/tournament\/([\S]*)(\/event\/([\S]*))?/)
function parseSlug(slug){
	let parsed = slugRegex.exec(slug)
	return {
		tournament: parsed[1],
		event: parsed.length > 2 ? parsed[3] : null
	}
}

const program = require('commander')
program.version('1.0.0')
	.option('-s, --set', 'Return the data of a given set via ID')
	.option('-P, --player', 'Return the data of a given Player via id')
	.option('-pg, --phasegroup', 'Return the data of a given PhaseGroup via id')
	.option('-p, --phase', 'Return the data of a given Phase via id')
	.option('-e, --event', 'Return the data of a given Event via slug')
	.option('-t, --tournament', 'Return the data of a given Tournament via slug')
	.parse(process.argv)

const API_URL = 'https://i9nvyv08rj.execute-api.us-west-2.amazonaws.com/prod/smashgg-lambda'

let params, promise, expandsPromise;
if(program.tournament){
	params = {
		tournamentName: 'to12',
		expands: {
			event: true,
			phases: true,
			groups: true
		}
	}
}
else if(program.event){
	promise = prompt.getAsync([
		'TournamentSlug',
		'EventSlug',
		'PhasesTF',
		'PhaseGroupsTF'
	])
	params = {type: 'event'}
}
else if(program.phase){
	promise = prompt.getAsync([
		'PhaseId',
		'PhaseGroupsTF'
	])
	params = {type: 'phase'}
}
else if(program.phasegroup){
	promise = prompt.getAsync([
		'PhaseGroupId',
		'SetsTF',
		'EntrantsTF',
		'StandingsTF',
		'SeedsTF'
	])
	params = {type: 'phasegroup'}
}
else if(program.set){
	params = {
		type: 'set',
		id: program.set
	}
}
else if(program.player){
	params = {
		type: 'player',
		id: program.tournament
	}
}

request({
	method: 'POST',
	body: params,
	uri: API_URL
})
.then(console.log)
.catch(console.error)