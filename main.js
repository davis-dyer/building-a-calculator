const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const substract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber
    return quotient
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber
    return product
}

const square = (firstNumber) => {
    const squared = Math.pow(firstNumber);
    return squared
}

const addProblem1 = add(5,10);
//console.log(addProblem1);
const substractProblem1 = substract(30, 15);
//console.log(substractProblem1);
const divideProblem1 = divide(25,5);
const multiplyProblem1 = multiply(60, 0.25);
const squareProblem1 = square(10);


/* //How many animals are there on the farm?
1/4(x) have 4 legs
3/4(x) have 2 legs
60 legs overall 
y + z = 60 */

//(.25x*4) leg animals
//60 * .75 = 2 leg animals

const twoLeg = multiply(0.75, 2);
const twoLegAnimals = divide(60, twoLeg)
const fourLegAnimals = subtract(60, twoLegAnimals);

console.log(`There are ${twoLegAnimals} animals with 4 legs`);
console.log(`There are ${fourLegAnimals} animals with 2 legs`);


