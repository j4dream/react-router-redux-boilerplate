if (process.env.NODE_ENV === 'production') {
	module.exports = require('./AppRoot.prod');
} else {
	module.exports = require('./AppRoot.dev');
}