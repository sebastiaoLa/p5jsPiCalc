var currentPi = 0;
var displayPi = 0;

function getOdd(n) {
    return 2 * n + 1;
}

function getOddFraction(n) {
    return ((-1) ** n) / getOdd(n)
}
function calcPi(n) {
    let a = currentPi / 4;
    a = a + getOddFraction(n);
    currentPi = a * 4;
    let b = a + getOddFraction(n + 1);
    let c = (a + b) / 2;
    displayPi = c * 4;
}
let n = 0;
while (true) {
    calcPi(n);
    if (n % 10000 == 0) {
        console.log(displayPi)
    }
    n++;
}
