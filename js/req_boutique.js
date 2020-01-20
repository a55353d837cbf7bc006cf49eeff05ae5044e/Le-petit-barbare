"use strict";

const fs = require("fs");
require("remedial");

const magasin = require('./magasin.js');

const req_boutique = function(req, res, query, grille_magasin){


	let marqueurs;
	let page;
	let i;
	let j;

 	for(i = 0; i < grille_magasin.length; i ++){
        for(j = 0; j< grille_magasin[i].length; j++){
			if(grille_magasin[i][j] === "x"){
				grille_magasin[i][j] = " ";
			}
    	}
    }
	
	if(query.action === "shop"){
		grille_magasin[1][23] = "x";
	}else{
		grille_magasin[4][10] = "x";
	}
	console.log(grille_magasin);

	page = fs.readFileSync('./html/shop.html', 'utf-8');
	
	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grille = magasin(grille_magasin, query);

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_boutique;
