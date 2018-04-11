'use strict';

let express = require('express');
let router = express.Router({mergeParams: true});

let Smash = require('./smash.js');

router.get('/', (req, res)=> {
    res.send("Hello!")
    console.log("Hello!");
});

router.route('/tournament').post(Smash.tournament);
router.route('/event').post(Smash.event);
router.route('/phase').post(Smash.phase);
router.route('/phasegroup').post(Smash.phasegroup);

module.exports = router;