const slsVars = require('./.serverless/output.json')

module.exports = async () => {
	process.env.API_URL = slsVars.ApiUrl
	console.log(`\n\nAPI url set: ${process.env.API_URL}\n`)
};