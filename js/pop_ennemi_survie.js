"use strict";

const pop_ennemi_survie = function(req, res, query, bfld, oppo, wave){

	let compteur = 0;

	do{
		let a = Math.floor(Math.random()*4);
		let b = Math.floor(Math.random()*8);
		let tmp = {"x" : a, "y" : b, "life" : 60, "scry" : 0}
		
		if (bfld[a][b]=== " "){
			bfld[a][b] = "o";
			compteur = compteur + 1;
			oppo.push(tmp);
		}else if (bfld[a][b]=== "x" || bfld[a][b]==="o"){
			compteur = compteur;
		}
	}while(compteur < 1);

};

module.exports = pop_ennemi_survie;
