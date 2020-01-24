"use strict";

const move_survie = require('./move_survie.js');

const pop_ennemi_survie = function(bfld, wave){

	let oppo;
    let i;
    let j;
    let espace = [];
    let random;
    let x, y;
    let coor;
    let nvEnnemi;
	let pop = 3
    oppo = [];
	let n = wave[0] + 1;
	// fait apparaitre les ennemis
	
	for (i = 0; i < bfld.length; i++) {
        for (j = 0; j < bfld[i].length; j++) {
            if (bfld[i][j] === " ") {
                espace.push([i,j]);
            }
        }
    }
	console.log(espace);

	for (i = 0; i < n ; i++) {
		random = Math.floor(Math.random()*espace.length);
        coor = espace[random];
        espace.splice(random, 1);
        console.log("longueur des cases vides = " + espace.length);
        x = coor[0];
        y = coor[1];
        console.log(x, y);
        bfld[x][y] = "o";
        nvEnnemi = { "x": x, "y": y, "life": 100, "scry": 0, "attaque_r": "non", "attaque_l":"non" };
        oppo.push(nvEnnemi);
	}
    return oppo;
};

module.exports = pop_ennemi_survie;
