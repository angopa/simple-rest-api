const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AutorizationController = require('./controllers/authorization.controller');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function (app) {

	app.post('/auth', [
		VerifyUserMiddleware.hasAuthValidFields,
		VerifyUserMiddleware.isPasswordAndUserMatch,
		AutorizationController.login
	]);

	app.post('/auth/refresh', [
		AuthValidationMiddleware.validJWTNeeded,
		AuthValidationMiddleware.verifyRefreshBodyField,
		AuthValidationMiddleware.validRefreshNeeded,
		AutorizationController.login
	]);
};