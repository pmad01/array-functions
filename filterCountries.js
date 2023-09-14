const fetchCountries = async function()  {
	const res = await fetch('https://restcountries.com/v3.1/all');
	return res.json();
}
const firstInitialIsA = function (country) {
	return country.charAt(0) === 'A';
}
const filteredCountries = async function () {
	const countries = await fetchCountries();
	let filteredCountries1 = countries
		.filter(country => {
		return firstInitialIsA(country.name.common);
		})
		.map(country => {
			return country.name.common;
		});

	//another way
	const countryNames = countries.map(country => {
		return country.name.common;
	});
	const filteredCountries2 = countryNames.filter(firstInitialIsA);

	//same output
	console.log({
		filteredCountries1,
		filteredCountries2
	});
}
filteredCountries();

