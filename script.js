const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde3feb0d9mshfba6ebe84fec58dp1d0f19jsnc5c273e3a60a',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));