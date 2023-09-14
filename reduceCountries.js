const fetchCountries = async function()  {
	const res = await fetch('https://restcountries.com/v3.1/all');
	return res.json();
}

const reduceByName = function (acc, country) {
	return {...acc, [country.name.common]: country}
}

const reducedCountries = async function()  {
	const countriesArr = await fetchCountries();
	const countriesReducedByName = countriesArr.reduce(reduceByName, {});
	console.log(countriesReducedByName);

	//Can do this now
	console.log(countriesReducedByName.Albania);
}
reducedCountries();

