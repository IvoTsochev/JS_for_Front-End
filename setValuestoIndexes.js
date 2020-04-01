function solve(arr) {
	let arrayLength = arr.shift();

	let newArr = [];
	newArr.length = arrayLength;

	for (let index = 0; index < newArr.length; index++) {
		newArr[index] = 0;
	}

	for (let i = 0; i <= arr.length - 1; i++) {
		let theIndex = arr[i].split(' - ')[0];
		let theValue = arr[i].split(' - ')[1];

		newArr.splice(theIndex, 1, theValue);
	}
	newArr.length = arrayLength;
	// console.log(newArr);

	for (let index = 0; index < newArr.length; index++) {
		console.log(newArr[index]);
	}
}

solve([ '2', '0 - 5', '0 - 6', '0 - 7' ]);
