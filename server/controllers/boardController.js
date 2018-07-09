const Board = require('../models/board');

const boardController = {
		getBoards: (req, res) => {
		Board.find({ id: req.query.id }, (err, tasks) => {
				if (err) return console.error(err);
		}).then(result => res.json(result));
		},

		addBoard: (req, res) => {
		Board.create({
				id: req.body.id,
				name: req.body.name
		}).then(result => res.json(result))
				.catch(err => console.error(err));
		},

		getAllBoards: (req, res) => {
		Board.find({}, (err, tasks) => {
				if (err) return console.error(err);
		}).then(result => res.json(result));
		}
}

module.exports = boardController;
