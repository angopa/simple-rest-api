const UsersModel = require('../models/users.model');
const crypto = require('crypto');

exports.insert = (req, res) => {
	console.log("body: " + JSON.stringify(req.body));
	let salt = crypto.randomBytes(16).toString('base64');
	let hash = crypto.createHmac('sha512', salt)
						.update(req.body.password + "")
						.digest("base64");
	req.body.password = salt + "$" + hash;
	req.body.permissionLevel = 1;
	UsersModel.createUser(req.body)
				.then((result) => {
					res.status(201).send({id:result.id});
				});
};

exports.list = (req, res) => {
	let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
	let page = 0;
	if (req.query) {
		if (req.query.page) {
			req.query.page = parseInt(req.query.page);
			page = Number.isInteger(req.query.page) ? req.query.page : 0;
		}
	}

	UsersModel.list(limit, page)
		.then((result) => {
			res.status(200).send(result);
		})
};

exports.getById = (req, res) => {
	console.log("UserId: " + req.params.userId);
	UsersModel.findById(req.params.userId).then((result) => {
		res.status(200).send(result);
	});
};

exports.patchById = (req, res) => {
	if (req.body.password) {
		let salt = crypto.randomBytes(16).toString('base64');
		let hash = crypto.createHmac('sha512', salt)
							.update(req.body.password + "")
							.digest("base64");

		req.body.password = salt + "$" + hash;
	}

	UsersModel.patchUser(req.params.userId, req.body).then((result) => {
		res.status(204).send({});
	});
};

exports.removeById = (req, res) => {
	UsersModel.removeById(req.params.userId)
		.then((result) => {
			res.status(204).send({result})
		});
};