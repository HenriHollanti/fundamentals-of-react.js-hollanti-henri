const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

const capitalized = names.map(name => String(name).charAt(0).toUpperCase() + String(name).substr(1, name.length));

console.log(capitalized); // The answer should be: ['Alice', 'Bob', 'Carol']