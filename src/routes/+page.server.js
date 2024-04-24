export async function load() {
	const response = await fetch('http://localhost:5136/api/menu-item', {
		credentials: 'include',
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
	const wea = response.json();
	console.log(response);
	return {
		wea
	};
}
