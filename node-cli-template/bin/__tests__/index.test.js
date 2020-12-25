const path = require('path');
const { exec } = require('child_process');

const { VERBIAGE } = require('../constants');

function cli(args, cwd) {
	return new Promise(resolve => {
		exec(
			`node ${path.resolve('./bin/cli')} ${args.join(' ')}`,
			{ cwd },
			(error, stdout, stderr) => {
				resolve({
					code: error && error.code ? error.code : 0,
					error,
					stdout,
					stderr
				});
			}
		);
	});
}

test('Check the verbiage when a name is passed', async () => {
	const name = 'Dan';
	const { stdout } = await cli(['-n', name], '.');
	expect(stdout).toEqual(`Hello, ${name}. ${VERBIAGE}\n`);
});

test('Returns an error code 1 with no arg', async () => {
	const { code } = await cli([], '.');
	expect(code).toBe(1);
});
