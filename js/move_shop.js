"use strict";

const fs = require('fs');
require('remedial');

const magasin = require('./magasin.js');
//const req_shop = require('./req_shop.js');
//const shop = require('./shop.js');

const move_shop = function(res, req, query, grille_magasin) {

	let page;
	let marqueurs;
	let i, j;
	let play = query.action;
	let reponse;
	let cx;
	let cy;
	let enter = false;
	let exit = false;

	for(i = 0; i < grille_magasin.length; i ++){
        for(j = 0; j< grille_magasin[i].length; j++){
        	if(grille_magasin[i][j] === "x"){
				cx = i;
				cy = j;
        	}
		}
    }

	if (play === "Haut"){
       if (cx !== 1){
           if (grille_magasin[cx-1][cy] === " "){
               grille_magasin[cx-1][cy] = "x";
               grille_magasin[cx][cy] = " ";
           } 
//		   else if (grille_magasin[cx-1][cy] === "m"){
//				console.log('ok');
//				max = true;
//			}
       }
    }else if(play === "Bas"){
        if (cx !== 11){
            if (grille_magasin[cx+1][cy] === " "){ 
                grille_magasin[cx+1][cy] = "x";
                grille_magasin[cx][cy] = " ";
            }
        }
    }else if(play === "Gauche"){
        if (cy !== 0){
            if (grille_magasin[cx][cy-1] === " "){
                grille_magasin[cx][cy-1] = "x";
                grille_magasin[cx][cy] = " ";
 			} 
//			else if(grille_magasin[cx][cy-1] === "m"){
//				console.log('ok');
//				max = true;
//			}
       }
    }else if (play === "Droite"){
        if (cy !== 25 ){
            if (grille_magasin[cx][cy+1] === " "){
                grille_magasin[cx][cy+1] = "x";
                grille_magasin[cx][cy] = " ";
            }else if(grille_magasin[cx][cy+1] === "e"){
				exit = true;			
			}
		}
	}else if (play === "Interaction"){
		if(grille_magasin[cx-1][cy] === "m"){
			enter = true;
		}
	}

    reponse = {
        "type" : "",
        "value" : "",
    };
    marqueurs = {};

	if(enter === true){
		reponse.type = 'update';
		reponse.value = '/req_shop';
	}else if(exit === true){
		reponse.type = 'update';
		reponse.value = '/req_preset';
	}else{
        // Aller jusqu'au magasin.
        reponse.type = 'refresh';
        reponse.value = magasin(grille_magasin, query);
    }

	
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(reponse));
    res.end();



};

module.exports = move_shop;
