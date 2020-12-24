#!/usr/bin/env node

import { VERBIAGE } from './constants';

const runCLI = async () => {
	console.log(VERBIAGE)
}

runCLI().catch(err => {
	console.error(err);
	process.exit(1);
});
