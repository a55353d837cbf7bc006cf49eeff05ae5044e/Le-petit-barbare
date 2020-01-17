"use strict";

const fs = require("fs");
require("remedial");

const setup_survie = function(req, res, query, bfld){
	
	let marqueurs;
	let page;
	let N = [["aa","ab","ac","ad","ae","af","ag","ah"], ["ba","bb","bc","bd","be","bf","bg","bh"], ["ca","cb","cc","cd","ce","cf","cg","ch"], ["da","db","dc","dd","de","df","dg","dh"]];

	page = fs.readFileSync('survie.html', 'utf-8');
	
    marqueurs = {};
    marqueurs.erreur = "";

	for (let i=0; i < bfld.length; i++){
		for(let j=0; j < bfld[0].length; j++){
			let x = N[i][j];
			if (bfld[i][j] === " "){
				marqueurs[x] = "";
			}else if(bfld[i][j] === "x"){
				marqueurs[x] = "X";
			}else if(bfld[i][j] === "o"){
				marqueurs[x] = "O";
			}
		}
	}

    page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
};

module.exports = setup_survie;
