#!/usr/bin/env node

const { VERBIAGE } = require('./constants')

const runCLI = async () => {
	console.log(VERBIAGE)
}

runCLI().catch(err => {
	console.error(err);
	process.exit(1);
});
