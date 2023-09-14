let filteredArr = arr.filter((item) => {
	return item % 2 === 0;
})
console.log(filteredArr);

const obj = {
	name: 'XYZ',
	age: 10,
	cat: {
		name: 'Meow',
	}
}

console.log(obj.cat?.name);

function isFemaleHero(hero) {
	return (hero.sex === 'f');
}

function isSuperhuman(hero) {
	return (hero.strength >= 500);
}

const femaleHeroes = heroes.filter(isFemaleHero);
console.log(femaleHeroes)

const textOptions = {
	citation: 'You received a citation from {{actingUser}}.',
	follow:   '{{actingUser}} started following your work',
	mention:  '{{actingUser}} mentioned you in a post.',
}
console.log(textOptions.citation);
console.log(textOptions["citation"]);