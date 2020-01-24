"use strict";

const fs = require("fs");
require('remedial');
const req_jeu_histoire = require("./req_jeu_histoire.js");

const req_load = function (req, res, query, bfld, heros, oppo, wave, niveau, save, save2, nom){

	
	let tmp = {"x" : 3, "y" : 2, "life" : 100, "scry" : 1, "epee" : 1, "hache" : 0, "dague" : 0, "masse" : 0, "potion" : 2, "epee_1": 0, "epee_2": 0, "arc" : 0, "pieces" : 100};

	console.log("le niveau est " + niveau[0]);
	console.log(save);

	if(query.action === "load1"){
		niveau[0] = save[0];
		if(niveau[0] !== 1){
			tmp.life = save[1];
			tmp.epee = save[2];
			tmp.hache = save[3];
			tmp.dague = save[4];
			tmp.masse = save[5];
			tmp.potion = save[6];
			tmp.epee_1 = save[7];
			tmp.epee_2 = save[8];
			tmp.arc = save[9];
			tmp.pieces = save[10];
			heros.push(tmp);
		}
	}else if(query.action === "load2"){
		niveau[0] = save2[0];
		if(niveau[0] !== 1){
			console.log("hey");
			tmp.life = save2[1];
            tmp.epee = save2[2];
            tmp.hache = save2[3];
            tmp.dague = save2[4];
			tmp.masse = save2[5];
            tmp.potion = save2[6];
            tmp.epee_1 = save2[7];
            tmp.epee_2 = save2[8];
            tmp.arc = save2[9];
            tmp.pieces = save2[10];
			heros.push(tmp);
		}
	}
	console.log(niveau[0]);
	console.log("la save2 est " + save2[0]);
	console.log("la save est " + save[0]);

	req_jeu_histoire(req, res, query, bfld, heros, oppo, wave, niveau, nom);
};

module.exports = req_load;
