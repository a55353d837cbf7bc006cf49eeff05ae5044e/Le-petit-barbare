//

"use strict";

const http = require("http");
const url = require("url");
let mon_serveur;
let port;
let bfld = []; 
let e1 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
let e2 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e3 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e4 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e5 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e6 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e7 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
bfld.push(e1, e2, e3, e4, e5, e6, e7);

let grille_magasin = [];
let a0 = ["3","3","3","3","3","3","3","3","3","3","3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"];
let a1 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " ", " "];
let a2 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " ", " ", "e"];
let a3 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1"];
let a4 = ["1","1","1","1","1","1","1","1","1","1","m", "m", "1", "1", " ", "1", "1", " ", " ", " ", " ", " ", " ", " ", "1"];
let a5 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", "1", "1", " ", "1", "1", "1", " ", " ", "1", "1", " ", " ", "e"];
let a6 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", "1", "1", "1", " ", " ", "1", "1", " ", " ", "1"];
let a7 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", "1", "1", "1", " ", " ", " ", " ", " ", " ", "1"];
let a8 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", "1", "1", "1", "1", "1", "1", " ", "1", "1", "1", " ", " ", "1"];
let a9 = ["1","1","1","1","1","1","1","1","1"," "," ", " ", " ", " ", " ", " ", "1", "1", " ", " ", " ", "1", " ", " ", "1"];
let a10 = ["1","1","1","1","1","1","1","1","1"," "," ", " ", " ", " ", " ", " ", " ", " "," ", " ", " ", "1", "1", " ", " "];
let a11 = ["1","1","1","1","1","1"," "," "," "," "," ", "1", "1", " ", " ", " ", " ", "1"," ", " ", " ", "1", "1", " ", " "];
let a12 = ["3","3","3","3","3","3","3","3","3","3","3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"];

grille_magasin.push(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

let grille_shop = [];
let b1 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
let b2 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
let b3 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
let b4 = ["1","1","1","1","1","1","1","1","1","1","1","1","e","1"," ","1","1"," ","1","1","1"];
let b5 = ["1","1","l","1","l","1","1"," "," "," "," "," "," "," "," ","1","1"," ","d","1","1"];
let b6 = ["1","1"," "," "," "," ","1"," ","1"," ","1","1"," ","1"," "," "," "," ","1","1","1"];
let b7 = ["1","1"," "," "," "," ","1"," ","1","1","1","1"," ","1","1","1","1","1","1","1","1"];
let b8 = ["1","1"," "," "," ","1","1","1","1","1","1","1"," ","1","1","1","1","1","1","1","1"];
let b9 = ["1","1","1","1"," ","1","1","1","1","s"," "," "," ","1"," "," "," "," "," "," ","1"];
let b10 = ["1","1","1","1"," ","1","1","1"," "," "," "," "," "," "," "," "," "," "," "," ","1"];
let b11 = ["1","1","1"," "," ","1"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","1"];
let b12 = ["1","1","o"," "," "," "," "," "," "," "," "," "," ","1","1","1"," "," ","1","1","1"];
let b13 = ["3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3"];

grille_shop.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12,b13);

let wave = [0];
let niveau = [1];
let heros = [];
let oppo = [];
let nom = [];
let life_enemy;
let save = [1,200,0,0,0,0,0,0,0,0,0,0];
let save2 = [2,200,0,0,0,0,0,0,0,0,0,0];


const req_accueil = require("./js/req_accueil.js");
const req_commencer = require("./js/req_commencer.js");
const req_afficher_formulaire_inscription = require("./js/req_afficher_formulaire_inscription.js");
const req_inscrire = require("./js/req_inscrire.js");
const req_identifier = require("./js/req_identifier.js");
const req_debuter = require("./js/req_debuter.js");
const req_jeu_histoire = require("./js/req_jeu_histoire.js");
const req_jeu_survie = require("./js/req_jeu_survie.js");
const req_boutique = require("./js/req_boutique.js");
const req_shop = require("./js/req_shop.js");
const req_acheter = require("./js/req_acheter.js");
const req_sauvegarde = require("./js/req_sauvegarde.js");
const req_load = require("./js/req_load.js");
const req_tuto = require("./js/req_tuto.js");
const req_story = require("./js/req_story.js");
const req_preset = require("./js/req_preset.js");
const req_credits = require("./js/req_credits.js");
const req_accueil_sauvegarde = require("./js/req_accueil_sauvegarde.js");


const move = require("./js/move.js");
const move_shop = require("./js/move_shop.js");
const move_inn = require("./js/move_inn.js");
const move_survie = require("./js/move_survie.js");

const req_static = require("./req_statique.js");
const req_erreur = require("./req_erreur.js");

let uuidV4 = require('uuid/v4');


const traite_requete = function (req, res) {

	let requete;
	let pathname;
	let query;
	let sid;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;


	try {
		switch (pathname) {
			case '/':
			case '/req_accueil':
				req_accueil(req, res, query);
				break;
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query, uuidV4, save, save2, nom);
				break;
			case '/req_debuter':
				req_debuter(req, res, query, niveau, heros);
				break;
			case '/req_tuto':
				req_tuto(req, res, query);
				break;
			case '/req_story':
				req_story(req, res, query);
				break;
			case '/req_preset':
				req_preset(req, res, query, niveau);
				break;
			case '/req_credits':
				req_credits(req, res, query);
				break;
			case '/req_jeu_histoire':
				req_jeu_histoire(req, res, query, bfld, heros, oppo, wave, niveau, nom);
				break;
			case '/move':
				move(req, res, query, bfld, wave, oppo, heros, niveau, life_enemy);
				break;
			case '/req_accueil_sauvegarde':
				req_accueil_sauvegarde(req, res, query, heros, niveau);
				break;
            case '/req_sauvegarde':
                req_sauvegarde(req, res, query, heros, niveau);
                break;
            case '/req_load':
                req_load(req, res, query, bfld, heros, oppo, wave, niveau, save, save2, nom);
                break;
			case '/req_jeu_survie':
				req_jeu_survie(req, res, query, bfld, heros, oppo, wave, niveau, nom);
				break;
			case '/move_survie':
				move_survie(req, res, query, bfld, wave, oppo, heros, niveau, life_enemy);
				break;
			case '/req_boutique':
				req_boutique(req, res, query, grille_magasin);
				break;
			case '/move_shop':
				move_shop(res, req, query, grille_magasin);
				break;
			case '/req_shop':
				req_shop(req, res, query, grille_shop, heros, save, niveau, nom);
				break;
			case '/req_acheter':
				req_acheter(req, res, query, heros);
				break;
			case '/move_inn':
				move_inn(res, req, query, grille_shop, grille_magasin);
				break;
			default:
				req_static(req, res, query);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};


mon_serveur = http.createServer(traite_requete);
port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
