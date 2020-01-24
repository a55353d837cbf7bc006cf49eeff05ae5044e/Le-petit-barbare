"use strict";

const fs = require("fs");
require('remedial');

const trait = function (req, res, query, uuidV4, save, save2, nom) {

	let marqueurs;
	let pseudo;
	let password;
	let page;
	let membre;
	let contenu_fichier;
	let listeMembres;
	let i;
	let trouve;
	let sid;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("./json/membres.json", 'utf-8');
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE PSEUDO/PASSWORD EXISTE

	trouve = false;
	i = 0;
	while (i < listeMembres.length && trouve === false) {
		if (listeMembres[i].pseudo === query.pseudo) {
			if (listeMembres[i].password === query.password) {
				trouve = true;
				save[0] = Number(listeMembres[i].sauvegarde1);
				save[1] = Number(listeMembres[i].pv1);
				save[2] = Number(listeMembres[i].epee1);
				save[3] = Number(listeMembres[i].hache1);
				save[4] = Number(listeMembres[i].dague1);
				save[5] = Number(listeMembres[i].masse1);
				save[6] = Number(listeMembres[i].potion1);
				save[7] = Number(listeMembres[i].epee_1_1);
				save[8] = Number(listeMembres[i].epee_2_1);
				save[9] = Number(listeMembres[i].arc1);
				save[10] = Number(listeMembres[i].pieces1);
				

				save2[0] = Number(listeMembres[i].sauvegarde2);
				save2[1] = Number(listeMembres[i].pv2);
                save2[2] = Number(listeMembres[i].epee2);
                save2[3] = Number(listeMembres[i].hache2);
                save2[4] = Number(listeMembres[i].dague2);
				save2[5] = Number(listeMembres[i].masse2);
                save2[6] = Number(listeMembres[i].potion2);
                save2[7] = Number(listeMembres[i].epee_1_2);
                save2[8] = Number(listeMembres[i].epee_2_2);
                save2[9] = Number(listeMembres[i].arc2);
                save2[10] = Number(listeMembres[i].pieces2);

				nom[0] = listeMembres[i].pseudo;
			}
		}
		i++;
	}

	// ON RENVOIT UNE PAGE HTML 

	if (trouve === true) {
		
		page = fs.readFileSync('./html/modele_accueil_membre.html', 'UTF-8');
		marqueurs = {};
        marqueurs.sid = uuidV4();
		marqueurs.pseudo = query.pseudo;
        page = page.supplant(marqueurs);
		nom.push(query.pseudo);

	} else {

		page = fs.readFileSync('./html/modele_accueil.html', 'utf-8');

        marqueurs = {};
        marqueurs.erreur = "ERREUR : compte ou mot de passe incorrect";
        marqueurs.pseudo = "";
        page = page.supplant(marqueurs);

	}

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};


module.exports = trait;
