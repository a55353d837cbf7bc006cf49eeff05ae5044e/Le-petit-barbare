"use strict";

const fs = require('fs');
require('remedial');

const shop = require('./shop.js');
const magasin = require('./magasin.js');

const move_inn = function(res, req, query, grille_shop, grille_magasin) {

    let page;
    let marqueurs;
    let i, j;
    let play = query.action;
    let test;
    let cx;
    let cy;
    let max = false;
	let exit = false;
//	let save = false;

	
//	console.log(grille_shop);

	let act = "nothing";

    for(i = 0; i < grille_shop.length; i ++){
        for(j = 0; j< grille_shop[i].length; j++){
            if(grille_shop[i][j] === "x"){
                cx = i;
                cy = j;
            } 
        }
    }

    if (play === "Haut"){
       if (cx !== 0){
			if (grille_shop[cx-1][cy] === " "){
                grille_shop[cx-1][cy] = "x";
                grille_shop[cx][cy] = " ";
           } 
        }
    }else if(play === "Bas"){
        if (cx !== 11){
            if (grille_shop[cx+1][cy] === " "){
                grille_shop[cx+1][cy] = "x";
                grille_shop[cx][cy] = " ";
            }
        }
    }else if(play === "Gauche"){
        if (cy !== 0){
            if (grille_shop[cx][cy-1] === " "){
                grille_shop[cx][cy-1] = "x";
                grille_shop[cx][cy] = " ";
            }else if(grille_shop[cx][cy-1] === "o"){
				exit = true;
			}	
        }
    }else if (play === "Droite"){
        if (cy !== 20){
            if (grille_shop[cx][cy+1] === " "){
                grille_shop[cx][cy+1] = "x";
                grille_shop[cx][cy] = " ";
            }
		}
//   } else if(play === "Interaction"){
//		if(grille_shop[cx-1][cy] === "s"){
//			save = true;
//		}
	}
    test = {
        "type" : "",
        "value" : "",
    };
    marqueurs = {};

      
    if(exit === true){

		test.type = 'update';
		test.value = '/req_boutique';

//	} else if(save === true){
//		test.type = "update";
//		test.value = "/req_sauvegarde";
	} else{
        // Aller jusqu'au magasin.
		test.type = 'refresh';
        test.value = shop(grille_shop, query);
    }
   // console.log(grille_shop);

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(test));
    res.end();



};

module.exports = move_inn;
