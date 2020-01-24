"use strict";

const fs = require("fs");
require("remedial");

const shop = require('./shop.js');

const req_shop = function(req, res, query, grille_shop, heros, save, niveau, nom){

	console.log("test");
	console.log(save);

    let marqueurs;
    let page;
    let i;
    let j;
	let k = 0;
	let contenu_fichier;
	let listeMembres;
	let pseudo;
	let membre;
	
    for(i = 0; i < grille_shop.length; i ++){
        for(j = 0; j< grille_shop[i].length; j++){
			if(grille_shop[i][j] === "x"){
				grille_shop[i][j] = " ";
			}
		}
    }
    marqueurs = {};
	if(query.action === "manger"){
		if(heros[0].pieces >= 15){
			heros[0].pieces -= 15;
			heros[0].life = Math.min(heros[0].life + 50, 100);
			grille_shop[4][12] = "x";
		} else {
			grille_shop[4][12] = "x";
			marqueurs.erreur = "Pas d'argent ou vie plaine";		
		}
	} else if(query.action === "boire"){
		if(heros[0].pieces >= 7){
			heros[0].pieces -= 7;
			heros[0].life = Math.min(heros[0].life + 20, 100);
			grille_shop[4][17] = "x";
		} else {
		    grille_shop[4][17] = "x";
            marqueurs.erreur = "Pas d'argent ou vie pleine";    

		}
	} else if(query.action === "save1"){
		grille_shop[9][10] = "x";
		
		contenu_fichier = fs.readFileSync("./json/membres.json", 'utf-8');
		listeMembres = JSON.parse(contenu_fichier);

		while(k < listeMembres.length){
			if( nom[0] === listeMembres[k].pseudo){
				listeMembres[k].sauvegarde1 = niveau[0];
				listeMembres[k].pv1 = heros[0].life;
				listeMembres[k].epee1 = heros[0].epee;
				listeMembres[k].hache1 = heros[0].hache;
				listeMembres[k].dague1 = heros[0].dague;
				listeMembres[k].masse1 = heros[0].masse;
				listeMembres[k].potion1 = heros[0].potion;
				listeMembres[k].epee_1_1 = heros[0].epee_1;
				listeMembres[k].epee_2_1 = heros[0].epee_2;
				listeMembres[k].arc1 = heros[0].arc;
				listeMembres[k].pieces1 = heros[0].pieces;
				
				 contenu_fichier = JSON.stringify(listeMembres);
                fs.writeFileSync("./json/membres.json", contenu_fichier, 'utf-8');
			}
			k++;
		}
		
		marqueurs.erreur = "";
	} else if(query.action === "save2"){
		grille_shop[9][10] = "x";
		
		contenu_fichier = fs.readFileSync("./json/membres.json", 'utf-8');
        listeMembres = JSON.parse(contenu_fichier);
	
        while(k < listeMembres.length){
			if( nom[0] === listeMembres[k].pseudo){
                listeMembres[k].sauvegarde2 = niveau[0];
                listeMembres[k].pv2 = heros[0].life;
                listeMembres[k].epee2 = heros[0].epee;
                listeMembres[k].hache2 = heros[0].hache;
                listeMembres[k].dague2 = heros[0].dague;
                listeMembres[k].masse2 = heros[0].masse;
                listeMembres[k].potion2 = heros[0].potion;
                listeMembres[k].epee_1_2 = heros[0].epee_1;
                listeMembres[k].epee_2_2 = heros[0].epee_2;
                listeMembres[k].arc2 = heros[0].arc;
                listeMembres[k].pieces2 = heros[0].pieces;
            	
				contenu_fichier = JSON.stringify(listeMembres);
				fs.writeFileSync("./json/membres.json", contenu_fichier, 'utf-8');
			}
        	k++;
		}

        marqueurs.erreur = "";
//	}else if(query.back = "Back"){
//		grille_shop[5][5] = "x";
//		marqueurs.erreur = "";
//		console.log("achat");
	}else {
    	grille_shop[11][9] = "x";
		marqueurs.erreur = "";
		console.log("entrée");
	}
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
