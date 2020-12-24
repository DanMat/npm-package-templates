import { init } from '../index';
import { VERBIAGE } from '../constants';

test('init function returns the verbiage string', async () => {
	const foo = await init();
	expect(foo).toEqual(VERBIAGE);
});
