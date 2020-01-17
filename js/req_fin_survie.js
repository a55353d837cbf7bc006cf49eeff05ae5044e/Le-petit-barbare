"use strict";

const fs = require("fs");
require('remedial');

const req_fin_survie = function (req, res, query, wave) {

    let marqueurs;
    let page;


    page = fs.readFileSync('fin_survie.html', 'utf-8');

    marqueurs = {};
    marqueurs.erreur = ""
	marqueurs.level = wave[0];
    page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
};

module.exports = req_fin_survie;
