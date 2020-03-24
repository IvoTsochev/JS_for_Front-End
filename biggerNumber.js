function solve(arr) {
    
    let firstNum = Number(arr[0]);
    let secondNum = Number(arr[1]);

    if (firstNum >= secondNum) {
        console.log(firstNum);
    } 
    else {
        console.log(secondNum);
    }
}

solve([2,3]);