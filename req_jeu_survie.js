"use strict";

const fs = require("fs");
require('remedial');

const map_survie = require("./map_survie.js");
const life_perso = require('./attaque_ennemi.js');

const req_jeu_survie = function (req, res, query, bfld, heros, oppo, wave, nom, tmp){
	
	let marqueurs;
    let page;
	let tmp1 = {"x" : 3, "y" : 2, "life" : 100, "scry" : 1, "epee" : 1, "lance" : 0, "potion" : 0};
    	
	tmp = tmp1;
	if(wave[0] === 0){
		console.log("ok");
        heros.splice(0, 1);
	
	}else {
        heros[0].x = 3;
        heros[0].y = 2;
    }
	console.log(wave[0]);
    heros.push(tmp);
	console.log(heros);
	

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
    console.log(nom + "nom");
    console.log(tmp.life);


//    let n = niveau[0];
    page = fs.readFileSync("./html/map_survie.html", "utf-8");
    marqueurs = {};
    marqueurs.masse = tmp.lance;
	marqueurs.epee = tmp.epee;
	marqueurs.potion = "x" + heros[0].potion;
	marqueurs.land = map_survie(bfld, query);
    marqueurs.life = life_perso(oppo, heros) + "%";
    marqueurs.nom = nom[0];
    marqueurs.level = wave[0];
    marqueurs.m1 = 110; //life_enemi;

    res.writeHead(200, {'Content-Type' : 'text/html'});
 	res.write(page.supplant(marqueurs));
    res.end();
};

module.exports = req_jeu_survie;
