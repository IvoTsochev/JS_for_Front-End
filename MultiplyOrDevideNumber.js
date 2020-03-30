function solve(arr) {
	let nNum = arr[0];
	let xNum = arr[1];

	if (xNum >= nNum) {
		return +nNum * +xNum;
	} else {
		return +nNum / +xNum;
	}
}

console.log(solve([ '144', '12' ]));
