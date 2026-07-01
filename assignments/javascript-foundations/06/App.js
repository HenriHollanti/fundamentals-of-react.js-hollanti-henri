const animals = ['dog', 'cat', 'dog', 'bird', 'cat', 'dog'];

// Count how many times each animal appears

const count = animals.reduce((acc, animal) => {
  //  (acc[animal] || 0) -> if acc[animal] is truthy, assign the value acc[animal] + 1, otherwise 0 + 1.
  acc[animal] = (acc[animal] || 0) + 1;

  return acc;

}, {});

console.log(count); // The answer should display - { dog: 3, cat: 2, bird: 1 }