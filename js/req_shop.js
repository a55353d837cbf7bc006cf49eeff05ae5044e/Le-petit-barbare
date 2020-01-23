"use strict";

const fs = require("fs");
require("remedial");

const shop = require('./shop.js');

const req_shop = function(req, res, query, grille_shop, heros, save, niveau){

	console.log("test");
	console.log(save);

    let marqueurs;
    let page;
    let i;
    let j;
	
    for(i = 0; i < grille_shop.length; i ++){
        for(j = 0; j< grille_shop[i].length; j++){
			if(grille_shop[i][j] === "x"){
				grille_shop[i][j] = " ";
			}
		}
    }
    marqueurs = {};
	if(query.action === "manger"){
		if(heros[0].pieces >= 5 && heros[0].life <=70){
			heros[0].pieces -= 5;
			heros[0].life += 30;
			grille_shop[4][12] = "x";
		} else {
			grille_shop[4][12] = "x";
			marqueurs.erreur = "Pas d'argent ou vie plaine";		
		}
	} else if(query.action === "boire"){
		if(heros[0].pieces >= 7 && heros[0].life <=60){
			heros[0].pieces -= 7;
			heros[0].life += 40;
			grille_shop[4][17] = "x";
		} else {
		    grille_shop[4][17] = "x";
            marqueurs.erreur = "Pas d'argent ou vie plaine";    

		}
	} else if(query.action = "save"){
		grille_shop[9][10] = "x";
		save[0] = niveau[0];
		save[1] = heros[0].life;
		save[2] = heros[0].scry;
		save[3] = heros[0].epee;
		save[4] = heros[0].hache;
		save[5] = heros[0].dague;
		save[6] = heros[0].masse;
		save[7] = heros[0].potion;
		save[8] = heros[0].epee_1;
		save[9] = heros[0].epee_2;
		save[10] = heros[0].arc;
		save[11] = heros[0].pieces;
		marqueurs.erreur = "";
	} else {
    	grille_shop[11][9] = "x";
		marqueurs.erreur = "";
	}
	console.log(heros);

    page = fs.readFileSync('./html/inn.html', 'utf-8');
	marqueurs.money = heros[0].pieces;
	marqueurs.life = heros[0].life;
    marqueurs.land = shop(grille_shop, query);

    page = page.supplant(marqueurs);

    res.writeHead(200, {'Content-Type': 'text/html' });
    res.write(page);
    res.end();

};

module.exports = req_shop;
