"use strict";

const fs = require("fs");
require('remedial');

const trait = function (req, res, query) {

	let marqueurs;
	let pseudo;
	let password;
	let page;
	let nouveauMembre;
	let contenu_fichier;
	let listeMembres;
	let i;
	let trouve;

	contenu_fichier = fs.readFileSync("./json/membres.json", 'utf-8');
	listeMembres = JSON.parse(contenu_fichier);

	trouve = false;
	i = 0;
	while (i < listeMembres.length && trouve === false) {
		if (listeMembres[i].pseudo === query.pseudo) {
			trouve = true;
		}
		i++;
	}

	// SI PAS TROUVE, ON AJOUTE LE NOUVEAU COMPTE DANS LA LISTE DES COMPTES

	if (trouve === false) {
		nouveauMembre = {};
		nouveauMembre.pseudo = query.pseudo;
		nouveauMembre.password = query.password;
		nouveauMembre.sauvegarde1 = "1";
		nouveauMembre.pv1 = "100";
		nouveauMembre.epee1 = "0";
		nouveauMembre.hache1 = "0";
		nouveauMembre.dague1 = "0";
		nouveauMembre.masse1 = "0";
		nouveauMembre.potion1 = "0";
		nouveauMembre.epee_1_1 = "0";
		nouveauMembre.epee_2_1 = "0";
		nouveauMembre.arc1 = "0";
		nouveauMembre.pieces1 = "0";

		nouveauMembre.sauvegarde2 = "1";
        nouveauMembre.pv2 = "100";
        nouveauMembre.epee2 = "0";
        nouveauMembre.hache2 = "0";
        nouveauMembre.dague2 = "0";
        nouveauMembre.masse2 = "0";
        nouveauMembre.potion2 = "0";
        nouveauMembre.epee_1_2 = "0";
        nouveauMembre.epee_2_2 = "0";
        nouveauMembre.arc2 = "0";
        nouveauMembre.pieces2 = "0";


		listeMembres[listeMembres.length] = nouveauMembre;

		contenu_fichier = JSON.stringify(listeMembres);

		fs.writeFileSync("./json/membres.json", contenu_fichier, 'utf-8');
	}


	// ON RENVOIT UNE PAGE HTML 

	if (trouve === true) {
		// SI CREATION PAS OK, ON REAFFICHE PAGE FORMULAIRE AVEC ERREUR

		page = fs.readFileSync('./html/modele_formulaire_inscription.html', 'utf-8');

		marqueurs = {};
		marqueurs.erreur = "ERREUR : ce compte existe déjà";
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

	} else {
		// SI CREATION OK, ON ENVOIE PAGE DE CONFIRMATION

		page = fs.readFileSync('./html/modele_confirmation_inscription.html', 'UTF-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.password = query.password;
		page = page.supplant(marqueurs);
	}

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};


module.exports = trait;
