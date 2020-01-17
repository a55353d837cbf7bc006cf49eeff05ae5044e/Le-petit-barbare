"use strict";

const fs = require("fs");
require('remedial');

const req_accueil = function (req, res, query) {

	let marqueurs;
	let page;


	page = fs.readFileSync('./html/accueil.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_accueil;
