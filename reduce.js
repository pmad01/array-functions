//Example 1
// const heroes = [
// 	{name: 'Hulk', strength: 90000, sex: 'm'},
// 	{name: 'Spider-Man', strength: 25000, sex: 'm'},
// 	{name: 'Hawk Eye', strength: 136, sex: 'm'},
// 	{name: 'Thor', strength: 100000, sex: 'm'},
// 	{name: 'Black Widow', strength: 136, sex: 'f'},
// 	{name: 'Vision', strength: 5000, sex: 'm'},
// 	{name: 'Scarlet Witch', strength: 60, sex: 'f'},
// 	{name: 'Mystique', strength: 120, sex: 'f'},
// 	{name: 'Namora', strength: 75000, sex: 'f'},
// ];
//
// function greaterStrength(champion, contender) {
// 	return (contender.strength > champion.strength) ? contender : champion;
// }
//
// function addStrength(tally, hero) {
// 	return tally + hero.strength;
// }
//
// const strongestHero = heroes.reduce(greaterStrength, {strength: 0});
// const combinedStrength = heroes.reduce(addStrength, 0);
//
// console.log({
// 	strongestHero,
// 	combinedStrength
// })


//Example 2
// function fizzBuzzReducer(acc, element) {
// 	if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
// 	if (element % 5 === 0) return `${acc}Fizz\n`;
// 	if (element % 3 === 0) return `${acc}Buzz\n`;
// 	return `${acc}${element}\n`;
// }
//
// const nums = [
// 	1, 2, 3, 4, 5, 6, 7, 8, 9,
// 	10, 11, 12, 13, 14, 15
// ];
// console.log(nums.reduce(fizzBuzzReducer, ''));
// console.log(typeof(nums.reduce(fizzBuzzReducer, '')));


//Example 3
// const peopleArr  = [
// 	{
// 		username:    'glestrade',
// 		displayname: 'Inspector Lestrade',
// 		email:       'glestrade@met.police.uk',
// 		authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
// 		lastSeen:    '2019-05-13T11:07:22+00:00',
// 	},
// 	{
// 		username:    'mholmes',
// 		displayname: 'Mycroft Holmes',
// 		email:       'mholmes@gov.uk',
// 		authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
// 		lastSeen:    '2019-05-10T11:21:36+00:00',
// 	},
// 	{
// 		username:    'iadler',
// 		displayname: 'Irene Adler',
// 		email:       null,
// 		authHash:    '319d55944f13760af0a07bf24bd1de28',
// 		lastSeen:    '2019-05-17T11:12:12+00:00',
// 	},
// ];
// console.log(peopleArr[0]['username'])
//
// function keyByUsernameReducer(acc, person) {
// 	return {...acc, [person.username]: person};
// }
// const peopleObj = peopleArr.reduce(keyByUsernameReducer, {});
// console.log(peopleObj);


//Example 4
// const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
// function minMaxReducer(acc, reading) {
// 	return {
// 		minReading: Math.min(acc.minReading, reading),
// 		maxReading: Math.max(acc.maxReading, reading),
// 	};
// }
// const initMinMax = {
// 	minReading: Number.MAX_VALUE,
// 	maxReading: Number.MIN_VALUE,
// };
// const minMax = readings.reduce(minMaxReducer, initMinMax);
// console.log(minMax);
