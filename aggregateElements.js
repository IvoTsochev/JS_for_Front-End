function solve(arr) {
	let arr1 = arr;

	let theSumIs = 0;
	function sumTheElements() {
		for (const el of arr1) {
			theSumIs += el;
		}
	}

	let inverseSum = 0;
	function inverseTheElements() {
		for (const el of arr1) {
			inverseSum = inverseSum + 1 / el;
		}
	}

	let stringElements = '';
	function stringTheElements() {
		for (const el of arr1) {
			stringElements = stringElements + el;
		}
	}

	inverseTheElements();
	sumTheElements();
	stringTheElements();
	console.log(theSumIs);
	console.log(inverseSum);
	console.log(stringElements);
}

solve([ 1, 2, 3 ]);
