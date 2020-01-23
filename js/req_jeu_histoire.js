// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const map = require("./map.js");
const life_perso = require('./attaque_ennemi.js');

const req_jeu_histoire = function (req, res, query, bfld, heros, oppo, wave, niveau, nom){
	
	let marqueurs;
	let page;
	let tmp = {"x" : 3, "y" : 2, "life" : 100, "scry" : 1, "epee" : 1, "hache" : 0, "dague" : 1, "masse" : 0, "potion" : 2, "epee_1": 0, "epee_2": 0, "arc" : 1, "pieces" : 100};
	if(niveau[0] === 1){
		heros.splice(0, 1);
		heros.push(tmp);
	}else{
		heros[0].x = 3;
		heros[0].y = 2;
	}	

	
	for(let i = 1; i < bfld.length - 1; i ++){
		for(let j = 1; j< bfld[0].length - 1; j++){
			if(bfld[i][j] === "x"){
				bfld[i][j] = " ";
			}else if(bfld[i][j] === "o"){
				bfld[i][j] = " ";
			}
		}
	}

	bfld[3][2] = "x";
	wave[0] = 0;
	for(let k = 0; k < oppo.length; k++){
		oppo.splice(k, 1);
		k = k - 1;
	}
		
	console.log(bfld);
	console.log(niveau);
	
	let n = niveau[0];
	page = fs.readFileSync("./html/map" + n +".html", "utf-8");
	marqueurs = {};

	if(typeof oppo[0] !== "undefined"){
		marqueurs.life_enemy1 = oppo[0].life + "%";
	} else {
		marqueurs.life_enemy1 = "";
	}

	marqueurs.masse = "x" + heros[0].masse;
	marqueurs.money = heros[0].pieces + "$";
	marqueurs.dague = "x" + heros[0].dague;
	marqueurs.epee = "x" + heros[0].epee;
	marqueurs.hache = "x" + heros[0].hache;
	marqueurs.belle_epee = "x" + heros[0].epee_1;
	marqueurs.epee_casse = "x" +  heros[0].epee_2;
	marqueurs.arc = "x" + heros[0].arc;
	marqueurs.potion = "x" + heros[0].potion;
	marqueurs.land = map(bfld, query, oppo, heros);
	marqueurs.life = heros[0].life + "%";
    marqueurs.nom = nom[0];
    marqueurs.level = niveau[0];


	res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(page.supplant(marqueurs));
    res.end();
};

module.exports = req_jeu_histoire;
