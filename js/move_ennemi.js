"use strict";

const move_ennemi = function(bfld, oppo, heros){

	let perso = heros[0];

	for(let i = 0; i < oppo.length; i++){
		let opp = oppo[i];
		let or = opp.x;
		let ab = opp.y;
		let op = 0;
		
		if (opp.x > perso.x && opp.y < perso.y && op === 0){
			if (i === 0 && bfld[or-1][ab] === " "){
				opp.x = opp.x - 1;
				bfld[or-1][ab] = "o";
				bfld[or][ab] = " ";
				op = op + 1;
			}else if (i === 1 && bfld[or][ab+1] === " "){
				opp.y = opp.y + 1;
				bfld[or][ab+1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 1;
				op = op + 1;
			}else if (i === 2 && bfld[or-1][ab+1] === " "){
				opp.x = opp.x - 1;
				opp.y = opp.y + 1;
				bfld[or-1][ab+1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 1;
				op = op + 1;
			}
		}else if(opp.x < perso.x && opp.y < perso.y && op === 0){
			if (i === 0 && bfld[or+1][ab+1] === " ") {
				opp.x = opp.x + 1;
				opp.y = opp.y + 1;
				bfld[or+1][ab+1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 1;
				op = op + 1;
			}else if (i === 1 && bfld[or+1][ab] === " "){
				opp.x = opp.x + 1;
				bfld[or+1][ab] = "o";
                bfld[or][ab] = " ";
				op = op + 1;
			}else if (i === 2 && bfld[or][ab+1] === " ") {
				opp.y = opp.y + 1;
				bfld[or][ab+1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 1;
				op = op + 1;
			}
		}else if(opp.x > perso.x && opp.y > perso.y && op === 0){
            if (i === 0 && bfld[or][ab-1] === " ") {
                opp.y = opp.y - 1;
				bfld[or][ab-1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 0;
				op = op + 1;
            }else if (i === 1 && bfld[or-1][ab-1] === " "){
                opp.x = opp.x - 1;
				opp.y = opp.y - 1;
				bfld[or-1][ab-1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 0;
				op = op + 1;
            }else if (i === 2 && bfld[or-1][ab] === " ") {
                opp.x = opp.x - 1;
				bfld[or-1][ab] = "o";
                bfld[or][ab] = " ";
            	op = op + 1;
			}
		}else if(opp.x < perso.x && opp.y > perso.y && op === 0){
            if (i === 0 && bfld[or+1][ab] === " ") {
                opp.x = opp.x + 1;
				bfld[or+1][ab] = "o";
                bfld[or][ab] = " ";
				op = op + 1;
            }else if (i === 1 && bfld[or][ab-1] === " "){
                opp.y = opp.y - 1;
				bfld[or][ab-1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 0;
				op = op + 1;
            }else if (i === 2 && bfld[or+1][ab-1] === " ") {
                opp.x = opp.x + 1;
				opp.y = opp.y - 1;
				bfld[or + 1][ab-1] = "o";
                bfld[or][ab] = " ";
				opp.scry = 0;
				op = op + 1;
            }
		}else if(opp.x === perso.x && opp.y < perso.y && op === 0 && bfld[or][ab+1] === " "){
			opp.y = opp.y + 1;
			bfld[or][ab+1] = "o";
            bfld[or][ab] = " ";
			opp.scry = 1;
			op = op + 1;
				
		}else if(opp.x < perso.x && opp.y === perso.y && op === 0 && bfld[or+1][ab] === " "){
            opp.x = opp.x + 1;
			bfld[or+1][ab] = "o";
            bfld[or][ab] = " ";
			op = op + 1;
				
		}else if(opp.x > perso.x && opp.y === perso.y && op === 0 && bfld[or-1][ab] === " "){
            opp.x = opp.x - 1;
			bfld[or-1][ab] = "o";
            bfld[or][ab] = " ";
			op = op + 1;
				
		}else if(opp.x === perso.x && opp.y > perso.y && op === 0 && bfld[or][ab-1] === " "){
            opp.y = opp.y - 1;
			bfld[or][ab-1] = "o";
            bfld[or][ab] = " ";
			opp.scry = 0;
			op = op + 1;
				
		}
	}


};

module.exports = move_ennemi;
