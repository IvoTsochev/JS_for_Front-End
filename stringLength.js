function solve(s1, s2, s3) {
    let charSum = s1.length + s2.length + s3.length;
    console.log(charSum);
    let averageChar = Math.floor(charSum / 3);
    console.log(averageChar);
}

solve('momo', 'omo', 'homo')