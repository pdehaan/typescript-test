function greeting(name) {
    return `hello ${name}, you magnificent bastard!`;
}
function isPaul(name) {
    return name === "paul";
}
console.log(greeting("paul"));
console.log(greeting("Sven"));
console.log(isPaul("peter"));
console.log(isPaul("paul"));
console.log(isPaul("Mary"));
