"use strict";

const fs = require("fs");
require('remedial');

const req_jeu_survie = function (req, res, query, bfld, heros, oppo, wave) {

	const setup_survie = require("./setup_survie.js");

	let tmp = {"x" : 1, "y" : 1, "life" : 500, "scry" : 1, "epee" : 1, "hache" : 0, "dague" : 0, "huile" : 0};
    heros.splice(0, 1);
	heros.push(tmp);
    
    for(let i = 0; i < bfld.length; i ++){
        for(let j = 0; j< bfld[0].length; j++){
            bfld[i][j] = " ";
        }
    }
    bfld[1][1] = "x";
    wave[0] = 0;
    for(let k = 0; k < oppo.length; k++){
        oppo.splice(k, 1);
        k = k - 1;
    }

	setup_survie(req, res, query, bfld);
};

module.exports = req_jeu_survie;
