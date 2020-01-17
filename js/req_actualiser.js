
const move = require("./move.js");
const move_ennemi = require("./move_ennemi.js");

module.exports = function (req, res, query, maj, maj_ennemi) {
    const reponse = {
        move: move(maj),
		move_ennemi: move_ennemi(maj_ennemi),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(reponse));
	res.end();
}

