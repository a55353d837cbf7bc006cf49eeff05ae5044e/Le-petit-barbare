"use strict";

const fs = require('fs');
require('remedial');

const req_acheter = function (req, res, query, heros){

	let marqueurs;
	let page;
	let buy = query.buy;
	let money = heros[0].pieces;
	let afficher = false;


	marqueurs = {};
	page = fs.readFileSync("./html/catalogue.html", "utf-8");

	if(typeof buy !== 'undefined'){
		if(buy === '2'){
        	console.log("buy");
        	if(money >= 20){
            	console.log("ok");
            	money -= 20;
            	heros[0].epee += 1;
            	heros[0].pieces = money;
				afficher = true;
        	} else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
 	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			} 

    	} else if (buy === '0'){
        	console.log("buy");
        	if(money >= 40){ 
            	console.log("ok");
            	money -= 40;
            	heros[0].dague += 1;
            	heros[0].pieces = money;
				afficher = true;
			    
			} else {
				marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
				marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			}	
    	} else if (buy === '1'){
			 if(money >= 15){ 
                money -= 15;
                heros[0].hache += 1;
                heros[0].pieces = money;
				afficher = true;
            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			} 

		} else if(buy === '3'){
			if(money >= 30){ 
                money -= 30;
                heros[0].masse += 1;
                heros[0].pieces = money;
				afficher = true;
            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			} 


		} else if(buy === '4'){
            if(money >= 60){
                money -= 60;
                heros[0].epee_1 += 1;
                heros[0].pieces = money;
                afficher = true;
            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			}
		} else if(buy === '5'){
            if(money >= 100){
                money -= 100;
                heros[0].epee_2 += 1;
                heros[0].pieces = money;
                afficher = true;
            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			}
		} else if(buy === '6'){
            if(money >= 75){
                money -= 75;
                heros[0].arc += 1
                heros[0].pieces = money;
                afficher = true;
            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
	            marqueurs.money = heros[0].pieces + "$";
                marqueurs.epee = heros[0].epee;
                marqueurs.dague = heros[0].dague;
                marqueurs.masse = heros[0].masse;
                marqueurs.hache = heros[0].hache;
                marqueurs.belle_epee = heros[0].epee_1;
                marqueurs.epee_casse = heros[0].epee_2;
                marqueurs.arc = heros[0].arc;
                marqueurs.potion = heros[0].potion;

			}
		} else if(buy === '7'){
            if(money >= 8){
                money -= 8;
                heros[0].potion += 1
                heros[0].pieces = money;
                afficher = true;


            } else {
                marqueurs.erreur = "ERREUR: pas assez d'argent ! ";
            	marqueurs.money = heros[0].pieces + "$";
  	    		marqueurs.epee = heros[0].epee;
    	    	marqueurs.dague = heros[0].dague;
        		marqueurs.masse = heros[0].masse;
        		marqueurs.hache = heros[0].hache;
        		marqueurs.belle_epee = heros[0].epee_1;
        		marqueurs.epee_casse = heros[0].epee_2;
        		marqueurs.arc = heros[0].arc;
        		marqueurs.potion = heros[0].potion;
			}
		}
	} else {
		marqueurs.erreur = "";
		marqueurs.money = heros[0].pieces + "$";
		marqueurs.epee = heros[0].epee;
		marqueurs.dague = heros[0].dague;
		marqueurs.masse = heros[0].masse;
		marqueurs.hache = heros[0].hache;
		marqueurs.belle_epee = heros[0].epee_1;
		marqueurs.epee_casse = heros[0].epee_2;
		marqueurs.arc = heros[0].arc;
		marqueurs.potion = heros[0].potion;

	}
	if(afficher === true){
		marqueurs.erreur = "";
		marqueurs.masse = heros[0].masse;
		marqueurs.money = heros[0].pieces + "$";
		marqueurs.dague = heros[0].dague;
		marqueurs.epee = heros[0].epee;
		marqueurs.hache = heros[0].hache;
		marqueurs.belle_epee = heros[0].epee_1;
		marqueurs.epee_casse = heros[0].epee_2;
		marqueurs.arc = heros[0].arc;
		marqueurs.potion = heros[0].potion;
	}

	res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(page.supplant(marqueurs));
    res.end();


};

module.exports = req_acheter;
