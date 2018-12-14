/**
 * Sends a special greeting, to a special person.
 *
 * @param name Name of person to greet.
 */
function greeting(name: string): string {
  return `hello ${name}, you magnificent bastard!`;
}

function isPaul(name: string): boolean {
  return name.toLowerCase() === "paul";
}

console.log(greeting("paul"));
console.log(greeting("Sven"));

console.log(isPaul("peter"));
console.log(isPaul("Paul"));
console.log(isPaul("Mary"));
