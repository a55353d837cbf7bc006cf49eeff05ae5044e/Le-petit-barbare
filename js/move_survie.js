"use strict";

const setup_survie = require("./setup_survie.js");
const pop_ennemi_survie = require("./pop_ennemi_survie.js");
const move_ennemi = require("./move_ennemi.js");
const dead_ennemi = require("./dead_ennemi.js");
const req_fin_survie = require("./req_fin_survie");
const attaque_ennemi = require("./attaque_ennemi.js");

const move_survie = function(req, res, query, bfld, wave, oppo, heros, niveau){

	let play = query.action;
	let op = 0;
	let step = 0;
	let perso = heros[0];
	let tmp;
	let target;
	let checktarget = 0;
	let damage;
	let cx;
	let cy;

	for(let i = 0; i < bfld.length; i++){
    	for(let j = 0; j < bfld[0].length; j++){
        	if (bfld[i][j] === "x"){
				cx = i;
				cy = j;
				if (cy === 3 && wave[0] === 0){
					console.log("cy = " + cy);
        			pop_ennemi_survie(req, res, query, bfld, oppo, wave);
        			wave[0] = wave[0] + 1;
					step = 1;
    			}else{
					step = 0;
				}
			}
		}
	}
	
 	if(step === 0){
        move_ennemi(bfld, oppo, heros);
    	attaque_ennemi(req, res, query, bfld, wave, oppo, heros, niveau);
	}

	if (play === "Haut"){
		if (cx !== 0 && op === 0){
			if (bfld[cx-1][cy] === " "){
				bfld[cx-1][cy] = "x";
				bfld[cx][cy] = " ";
				perso.x = perso.x-1;
				op = op + 1;
			}
		}
	}else if(play === "Bas"){
		if (cx !== 3 && op === 0){
            if (bfld[cx+1][cy] === " "){	
				bfld[cx+1][cy] = "x";
            	bfld[cx][cy] = " ";
				perso.x = perso.x + 1;
            	op = op + 1;
			}
        }
	}else if(play === "Gauche"){
		if (cy !== 0 && op === 0){
			if (bfld[cx][cy-1] === " "){
            	bfld[cx][cy-1] = "x";
            	bfld[cx][cy] = " ";
				perso.y = perso.y - 1;
            	perso.scry = 0;
				op = op + 1;
			}else if(bfld[cx][cy-1] === "o"){
				perso.scry = 0;
			}
        }
	}else if (play === "Droite"){
		if (cy !== 7 && op === 0){
            if (bfld[cx][cy+1] === " "){	
				bfld[cx][cy+1] = "x";
            	bfld[cx][cy] = " ";
				perso.y = perso.y + 1;
            	perso.scry = 1;
				op = op + 1;
        	}else if(bfld[cx][cy+1] === "o"){
				perso.scry = 1;
			}
		}
	}else if (play === "Attaquer"){
		if(perso.scry === 1){
			for(let k = 0; k < oppo.length; k++){
				tmp = oppo[k];
				if (tmp.x === perso.x && tmp.y === perso.y + 1){
					target = tmp;
					checktarget = checktarget + 1;
				}
			}
			if (checktarget === 1){
				damage = Math.floor(Math.random()*20) + 10;
				target.life = target.life - damage;;
			}
		}else if (perso.scry === 0){
			for(let k = 0; k < oppo.length; k++){
                tmp = oppo[k];
                if (tmp.x === perso.x && tmp.y === perso.y - 1){
                    target = tmp;
					checktarget = checktarget + 1;
                }
            }
			if (checktarget === 1){
            	damage = Math.floor(Math.random()*20) + 10;
				target.life = target.life - damage;
			}
		}
	}
	
	dead_ennemi(bfld, oppo);

	if(oppo.length === 0 && wave[0]!== 0){
		wave[0] = wave[0] + 1;
		for(let i = 0; i < wave[0]; i++){
			pop_ennemi_survie(req, res, query, bfld, oppo, wave);
		}
		console.log(heros);
        console.log(oppo);
        console.log(bfld);
        console.log("nombre de vagues : " + wave[0]);
        setup_survie(req, res, query, bfld);
	}else if(perso.life <= 0){
		req_fin_survie(req, res, query, wave);
	}else{
		console.log(heros);
		console.log(oppo);
		console.log(bfld);
		console.log("nombre de vagues : " + wave[0]);
		setup_survie(req, res, query, bfld);
	}

};

module.exports = move_survie;
