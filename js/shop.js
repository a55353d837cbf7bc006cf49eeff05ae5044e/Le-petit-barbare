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
                html += '<div class="case"></div>';

            } else if (grille_shop[i][j] === "x") {
				if(query.action === "Haut"){
                    if(grille_shop[cx-1][cy] === " "){
                        html += '<div class="case"><div class="perso up"></div></div>';
                    } else {
                        html += '<div class="case"><div class="perso up"></div></div>';
                    }
                } else if(query.action === "Bas"){
                    if(grille_shop[cx+1][cy] === " "){
                        html += '<div class="case"><div class="perso down"></div></div>';
                    } else {
                        html += '<div class="case"><div class="perso down"></div></div>';
                    }
                } else if(query.action === "Gauche"){
                    if(grille_shop[cx][cy-1] === " "){
                        html += '<div class="case"><div class="perso left"></div></div>';
                    } else {
                        html += '<div class="case"><div class="perso left"></div></div>';
                    }

                } else if(query.action === "Droite"){
                    if(grille_shop[cx][cy+1] === " "){
                        html += '<div class="case"><div class="perso right"></div></div>';
                    }else {
                        html += '<div class="case"><div class="perso right"></div></div>';
                    }
				} else if(query.action === "Interaction"){
					if(grille_shop[cx][cy+1] === "d"){
						console.log("ok");
						 html += '<div class="case"><div class="perso right"></div></div>';
					} else if(grille_shop[cx-1][cy] === "e" || grille_shop[cx-1][cy] === "l"){
						html += '<div class="case"><div class="perso up"></div></div>';
					} else {
						html += '<div class="case"><div class="perso up"></div></div>';
					}
                } else {
					html += '<div class="case"><div class="perso up"></div></div>';
				}
			} else if (grille_shop[i][j] === "1") {
                html += '<div class="case"></div>';
			}else if(grille_shop[i][j] === "o"){
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
					 
					} else {
                		html += '<div class="case"></div>';
					}
				} else {
					html += '<div class="case"></div>';
				}
            } else if(grille_shop[i][j] === "s"){
				if(query.action === 'Interaction'){
                    if(grille_shop[cx-1][cy] === "s"){
                        html += '<div class="table_save" id="save">';
                        html += '<label id="texte_save">Voulez-vous sauvegarder la partie?</label>';
                        html += '<button onclick="save()" id="bouton">Oui</button>';
                        html += '</div>';

                    } else { 
                        html += '<div class="case"></div>';
                    }
                } else {
					html += '<div class="case"></div>';
				}
			} else if(grille_shop[i][j] === "e"){
				if(query.action === 'Interaction'){
					if(grille_shop[cx-1][cy] === "e"){
						html += '<div class="table_eat" id="manger">';
						html += '<label id="texte">Voulez-vous manger?</label>';
						html += '<button onclick="url()" id="bouton">Oui</button>';
						html += '</div>';
					
                	} else { 
                    	html += '<div class="case"></div>';
                	}
				} else {
					html += '<div class="case"></div>';
				}
			} else if(grille_shop[i][j] === "d"){
				if(query.action === 'Interaction'){
					if(grille_shop[cx][cy+1] === "d"){
						html += '<div class="table_drink" id="boire">';
						html += '<label id="texte">Voulez-vous boire?</label>';
						html += '<button onclick="boire()" id="bouton">Oui</button>';
						html += '</div>';
					} else {
						html += '<div class="case"></div>';
					}
                } else {
                    html += '<div class="case"></div>';
                }
			}  

		}


        html += '</div>';
    }

    return html;

};

module.exports = interieur_magasin;
