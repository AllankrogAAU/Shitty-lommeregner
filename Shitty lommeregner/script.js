const numberOneText = document.getElementById("numberOneText");
const numberTwoText = document.getElementById("numberTwoText");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const gange = document.getElementById("gange");
const dividere = document.getElementById("dividere");
const modulus = document.getElementById("modulus");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function(){
    let numberOne = Number(numberOneText.value);
    let numberTwo = Number(numberTwoText.value);

    let resultPlus = numberOne + numberTwo;
    let resultGange = numberOne * numberTwo;
    let resultMinus = numberOne - numberTwo;
    let resultDividere = numberOne / numberTwo;
    let resultModulus = numberOne % numberTwo;


    if (plus.checked) {
        result.textContent = resultPlus;
    } else if (minus.checked) {
        result.textContent = resultMinus;
    } else if (gange.checked) {
        result.textContent = resultGange;
    } else if (dividere.checked) {
        result.textContent = resultDividere;
    } else if (modulus.checked) {
        result.textContent = resultModulus;
    } else {
        result.textContent = 'Du skal vælge en operator';
    }
}