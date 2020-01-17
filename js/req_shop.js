"use strict";

const fs = require("fs");
require("remedial");

const shop = require('./shop.js');

const req_shop = function(req, res, query, grille_shop){

	console.log("test");

    let marqueurs;
    let page;
    let i;
    let j;
	
    for(i = 0; i < grille_shop.length; i ++){
        for(j = 0; j< grille_shop[i].length; j++){
			if(grille_shop[i][j] === "x"){
				grille_shop[i][j] = " ";
			}
           /* if(grille_shop[i][j] === "1"){
                grille_shop[i][j] = "";

            } else if(grille_shop[i][j] === "m"){
                grille_shop[i][j] = "m";
			} else if (grille_shop[i][j] === "c"){
				grille_shop[i][j] === "c";
            } else if(grille_shop[i][j] === "s"){
				grille_shop[i][j] === "s";
			} else {
                grille_shop[i][j] = " ";
            }*/
        }
    }
    grille_shop[11][9] = "x";
	console.log(grille_shop);

    page = fs.readFileSync('./html/inn.html', 'utf-8');

    marqueurs = {};
    marqueurs.erreur = "";
    marqueurs.land = shop(grille_shop, query);

    page = page.supplant(marqueurs);

    res.writeHead(200, {'Content-Type': 'text/html' });
    res.write(page);
    res.end();

};

module.exports = req_shop;
