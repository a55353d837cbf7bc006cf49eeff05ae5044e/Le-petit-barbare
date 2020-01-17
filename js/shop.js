"use strict";

const fs = require("fs");

const interieur_magasin = function (grille_shop, query) {

    let html;
    let i;
    let j;
	let m,n;
	let cx; 
	let cy;
	let max = false;

	for (m = 0; m < grille_shop.length; m++) {
		for(n = 0; n < grille_shop[m].length; n++){
			if(grille_shop[m][n] === "x") {
				cx = m;
				cy = n;
			}
		}
	}
    html = '';

    for (i = 0; i < grille_shop.length; i++) {
        html += '<div class="grille-ligne">';
		for(j=0; j<grille_shop[i].length; j++){
			if(grille_shop[i][j] === " "){
                html += '<div class="case">1</div>';

            } else if (grille_shop[i][j] === "x") {
                html += '<div class="case"><img class="perso" src="hero.gif"></div>';
			} else if (grille_shop[i][j] === "1") {
                html += '<div class="case"></div>';
            } else if(grille_shop[i][j] === "l"){
				if(query.action === 'Interaction'){
					if(grille_shop[cx-1][cy] === "l"){
						html += '<div class="table">';
						html += '<form action="/req_acheter" method="GET">';
						html += '<label id="texte">Voulez-vous acheter?</label>';
						html += '<button name="action" value="oui" id="bouton">Oui</button>';
						html += '</form>';
						html += '</div>';
					}
				} else {
                	html += '<div class="case"></div>';
				}
            } else if(grille_shop[i][j] === "s"){
				html += '<div class="case">s</div>';
			} else if(grille_shop[i][j] === "e"){
				if(query.action === 'Interaction'){
					if(grille_shop[cx-1][cy] === "e"){
						html += '<div class="table_eat">';
						html += '<form action="/req_acheter" method="GET">';
						html += '<label id="texte">Voulez-vous manger?</label>';
						html += '<button name="action" value="oui" id="bouton">Oui</button>';
						html += '</form>';
						html += '</div>';
					}
                } else { 
                    html += '<div class="case">e</div>';
                }
			} else if(grille_shop[i][j] === "d"){
				if(query.action === 'Interaction'){
					if(grille_shop[cx][cy+1] === "d"){
						html += '<div class="table_drink">';
						html += '<form action="/req_acheter" method="GET">';
						html += '<label id="texte">Voulez-vous boire?</label>';
						html += '<button name="action" value="oui" id="bouton">Oui</button>';
						html += '</form>';
						html += '</div>';
					}
                } else { 
                    html += '<div class="case">d</div>';
                }
			}  

		}


        html += '</div>';
    }

    return html;

};

module.exports = interieur_magasin;
