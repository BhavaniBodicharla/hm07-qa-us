// eslint-disable-next-line no-undef
const config = require('../config');

test('Response code should be 200', async () => {
    let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);
});

test('Response message to be true', async () => {
    let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse.ok).toBe(true);
});


