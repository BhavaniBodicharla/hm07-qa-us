// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ]
	
}

test('Should response code be 201', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(201);
});

test('Response for courierService to be ', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse.courierService).toBe('Order and Go');
});

