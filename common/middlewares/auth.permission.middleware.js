const jwtSecret = require('../../common/config/env.config.js').jwt_secret,
	jwt = require('jsonwebtoken');

const ADMIN_PERMISSION = 4096;

exports.minimumPermissionLevelRequired = (required_permissoin_level) => {
	return (req, res, next) => {
		let user_permission_level = parseInt(req.jwt.permissionLevel);
		if (user_permission_level & required_permissoin_level) {
			return next();
		} else {
			return res.status(403).send({error: "User without the permission level required."});
		}
	};
};

exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) => {
	let user_permission_level = parseInt(req.jwt.permissionLevel);
	let userId = req.jwt.userId;
	if (req.params && req.params.userId && userId === req.params.userId) {
		return next();
	} else {
		if (user_permission_level & ADMIN_PERMISSION) {
			return next();
		} else {
			return res.status(400).send({error: "Just Admin permission user can modify different user."});
		}
	}
};

exports.sameUserCanDoThisAction = (req, res, next) => {
	let userId = req.jwt.userId;
	if (req.params.userId !== userId) {
		return next();
	} else {
		return res.status(400).send();
	}
};