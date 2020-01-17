"use strict";

const fs = require("fs");
require('remedial');

const req_debuter = function (req, res, query, niveau, heros) {

	let marqueurs;
	let page;
	let sid;

	niveau[0] = 1;
	heros.splice(0, 1);

	page = fs.readFileSync('./html/modele_debuter.html', 'utf-8');

	sid = query.sid;
	fs.writeFileSync("ids/" + sid);

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	marqueurs.sid = sid;
	page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = req_debuter;
