import { VERBIAGE } from './constants';

const getVerbiageSlowly = () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(VERBIAGE);
		}, 2000);
	});

export const init = async () => {
	const verbiage = await getVerbiageSlowly();
	return verbiage;
};
