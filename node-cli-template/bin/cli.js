const yargs = require('yargs');

const { VERBIAGE } = require('./constants');

const runCLI = async () => {
	const options = yargs
		.usage('Usage: -n <name>')
		.option('n', {
			alias: 'name',
			describe: 'Your name',
			type: 'string',
			demandOption: true
		}).argv;

	console.log(`Hello, ${options.name}. ${VERBIAGE}`);
};

runCLI().catch(err => {
	console.error(err);
	process.exit(1);
});
