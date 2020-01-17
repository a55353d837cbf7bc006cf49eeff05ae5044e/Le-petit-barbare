"use strict";

const fs = require("fs");
require('remedial');


const req_preset = function (req, res, query, niveau){

    let page;
    let marqueurs;
	let n;

	n = niveau[0];
	console.log(niveau[0]);
    page = fs.readFileSync('./html/preset' + n + '.html', 'utf-8');

    marqueurs = {};
    marqueurs.erreur = "";
    page = page.supplant(marqueurs);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();

};

module.exports = req_preset;

