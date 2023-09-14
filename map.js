let arr = [1, 2, 3];
const doubleNumber = function (nr) {
	return nr *= 2;
}
let doubledArrV1 = arr.map((nr) => {
	return nr *= 2;
})
let doubledArrV2 = arr.map(doubleNumber);
console.log(doubledArrV1, doubledArrV2);