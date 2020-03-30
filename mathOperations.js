function solve(firstNum, secondNum, operation) {
	let result = 0;

	if (operation == '+') {
		result = +firstNum + secondNum;
	} else if (operation == '-') {
		result = +firstNum - secondNum;
	} else if (operation == '*') {
		result = +firstNum * +secondNum;
	} else if (operation == '/') {
		result = +firstNum / +secondNum;
	} else if (operation == '%') {
		result = +firstNum % +secondNum;
	} else if (operation == '**') {
		result = Math.pow(+firstNum, +secondNum);
	}

	console.log(result);
}

solve(2, 3, '**');
