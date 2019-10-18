const config = require('./common/config/env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');

app.use(function (req, res) {
	res.header('Access-Control-Allow_Origin', '*');
	res.header('Access-Control-Allow_Credentials', 'true');
	res.header('Access-Control-Allow_Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Expose-Header', 'Content-Lenght');
	res.header('Access-Control-Allow_Headers', 'Accept, Authorization, Content-Type, X-Request-Qith, Range');

	if (req.method == 'OPTIONS') {
		return res.send(200);
	} else {
		return next();
	}
});

app.use(bodyParser.json());
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);

app.listen(config.port, function() {
	console.log('app listening at port %s', config.port);
});