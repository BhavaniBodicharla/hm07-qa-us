// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code to be 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Response to be For picnic ', async () => {
	let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse.name).toBe('For picnic');
});

