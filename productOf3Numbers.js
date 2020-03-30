function solve(arr) {
	let negativeCounter = 0;
	for (const el of arr) {
		if (el < 0) {
			negativeCounter += 1;
		}
	}

	if (negativeCounter % 2 !== 0) {
		console.log('Negative');
	} else {
		console.log('Positive');
	}
}

solve([ '-3', '-4', '5' ]);
