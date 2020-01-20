"use strict";

const fs = require("fs");

const magasin = function (grille_magasin, query) {

	let html;
	let i;
	let j;
	let a; 
	let b;
	let cx;
	let cy;

	for(a = 0; a < grille_magasin.length; a++){
		for (b = 0; b < grille_magasin[a].length; b++){
			if (grille_magasin[a][b] === "x"){
				cx = a;
				cy = b;
			}
		}
	}


	html = '';

	for (i = 0; i < grille_magasin.length; i++) {
		html += '<div class="grille-ligne">';

		for (j = 0; j < grille_magasin[i].length; j++) {
			if (grille_magasin[i][j] === " ") {
				html += '<div class="land"></div>';

			} else if (grille_magasin[i][j] === "x") {
				if(query.action === "Haut"){
					if(grille_magasin[cx-1][cy] === " "){
                    	html += '<div class="land"><div class="perso up"></div></div>';
					} else {
						html += '<div class="land"><div class="up"></div></div>';
					}
                } else if(query.action === "Bas"){
					if(grille_magasin[cx+1][cy] === " "){
                    	html += '<div class="land"><div class="perso down"></div></div>';
					} else {
						html += '<div class="land"><div class="down"></div></div>';
					}
                } else if(query.action === "Gauche"){
					if(grille_magasin[cx][cy-1] === " "){
                    	html += '<div class="land"><div class="perso left"></div></div>';
					} else {
						html += '<div class="land"><div class="left"></div></div>';
					}
                } else if(query.action === "Droite"){
					if(grille_magasin[cx][cy+1] === " "){
                    	html += '<div class="land"><div class="perso right"></div></div>';
					} else {
						html += '<div class="land"><div class="right"></div></div>';
					}
				} else {
                    html += '<div class="land"><div class="perso left"></div></div>';
                }

			} else if (grille_magasin[i][j] === "1") {
				html += '<div class="land"></div>';
			} else if(grille_magasin[i][j] === "m"){
				html += '<div class="land"></div>';
			}
		}

		html += '</div>';
	}
	
	return html;

};

module.exports = magasin;
