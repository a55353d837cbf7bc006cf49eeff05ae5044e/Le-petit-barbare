"use strict";

const dead_ennemi = function(bfld, oppo){

	let tmp;

	for(let i = oppo.length - 1; i >= 0; i--){
		tmp = oppo[i];
		if(tmp.life <= 0){
			oppo.splice(i, 1);
			bfld[tmp.x][tmp.y] = " ";
		}
	}

};

module.exports = dead_ennemi;
