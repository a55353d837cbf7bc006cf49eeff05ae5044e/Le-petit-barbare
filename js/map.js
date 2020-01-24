"use strict";

const map = function (bfld, query, oppo, heros) {

	let html;
	let i;
	let j;
	let a;
	let b;
	let cx; 
	let cy;
	let tmp;

	for(a = 0; a < bfld.length; a++){
		for(b = 0; b < bfld[a].length; b++){
			if(bfld[a][b] === "x"){
				cx = a;
				cy = b;
			}
		}
	}

	html = '';

	for (i = 0; i < bfld.length; i++) {
		html += '<div class="ligne">';
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " " || bfld[i][j] === "1"){
                html += '<div class="land"></div>';
            }else if(bfld[i][j] === "x"){
				if(query.action === "Haut"){
					if(bfld[cx-1][cy] === " "){
						html += '<div class="land"><div class="perso up"></div></div>';
					} else {
						html += '<div class="land"><div class="perso up"></div></div>';
					}
				} else if(query.action === "Bas"){
					if(bfld[cx+1][cy] === " "){
						html += '<div class="land"><div class="perso down"></div></div>';
					} else {
						html += '<div class="land"><div class="perso down"></div></div>';
					}
				} else if(query.action === "Gauche"){
					if(bfld[cx][cy-1] === " "){
						html += '<div class="land"><div class="perso left"></div></div>';
					} else { 
                        html += '<div class="land"><div class="perso left"></div></div>';
                    }

				} else if(query.action === "Droite"){
					if(bfld[cx][cy+1] === " "){
						html += '<div class="land"><div class="perso right"></div></div>';
					}else { 
                        html += '<div class="land"><div class="perso right"></div></div>';
                    }

				} else if(query.action === "Attaquer"){
					if(heros[0].scry === 0){
						if(query.arme === "arc" && heros[0].arc>=1){
							html += '<div class="land"><div class="perso arc_left"></div></div>';
						}else if(query.arme === "dague" && heros[0].dague>=1){
							html += '<div class="land"><div class="perso dague_left"></div></div>';
						}else{
							html += '<div class="land"><div class="perso lance_left"></div></div>';
						}
					}else if (heros[0].scry === 1){
						if(query.arme === "arc" && heros[0].arc>=1){
                            html += '<div class="land"><div class="perso arc_right"></div></div>';
                        }else if(query.arme === "dague" && heros[0].dague>=1){
                            html += '<div class="land"><div class="perso dague_right"></div></div>';
                        }else{
                            html += '<div class="land"><div class="perso lance_right"></div></div>';
                        }

					}
				}
				else{
					html += '<div class="land"><div class="perso right"></div></div>';
				}
            }else if(bfld[i][j] === "o"){
				for(let k = 0; k < oppo.length; k++){
					if(oppo[k].x === i && oppo[k].y === j){
						tmp = oppo[k];
					}
				}
				if(tmp.scry === 0){
					if(tmp.attaque_l === "oui"){
						html += '<div class="land"><div class="ghost_attaque_left"></div></div>';
					} else {
						html += '<div class="land"><div class="ghost gauche"></div></div>';	
					}
			
				} else if(tmp.scry === 1){
					if(tmp.attaque_r === "oui"){
						html += '<div class="land"><div class="ghost_attaque_right"></div></div>';
					} else {
						html += '<div class="land"><div class="ghost droite"></div></div>';	
					}
				} 
			} 	
							
			
		}
		html += '</div>';
	}

	return html;
};

module.exports = map;
