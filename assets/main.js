// 1. Create an array - with a name that makes sense - that contains the following items: English, History, Science, PE, Math, Computer Science, World Language. Write a second statement that logs this array to the console.
const courses = [`English`, `History`, `Science`, `PE`, `Math`, `Computer Science`, `World Language`];
console.log(courses);

// 2. Using an array method, add an item to the end of the array for Fine Arts. Log the updated array to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const count = courses.push(`Fine Arts`);
console.log(courses);

// 3. Using an array sorting method, arrange the array in alphabetical order and log it to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
courses.sort();
console.log(courses);

// 4. Using bracket notation, output a statement to the console that says something like, `My favorite class is ___________!`
console.log(`My fav class is ${courses[0]}!`);

// 5. Using an array method, output a statement to the console that lets a user know what the first three classes are.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
console.log(`My first three classes are ${courses.slice(0, 3)}.`);

// 6. Using an array method, remove the last class from the array and set it equal to a new variable. Then, log the updated version to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
courses.pop();
courses[7] = `fishing`;
console.log(courses);

// 7. Using an array method, add the removed class back and print the updated version to the console.
courses.push(`World Language`);
console.log(courses);

// 8. Using dot notation, write a statement that outputs a sentence saying how many items are in the array.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log(`There are ${courses.length} items in the array.`);

var grades = [89, 91, 78, 98, 82, 83, 98, 100]; // Use this array for the remaining questions

// 9. Using bracket notation, construct a statement that is true comparing two values in the array using the `==` operators.
const grade = 89;
grade == 89;
console.log(`${grades[0]} is better than ${grades[4]}.`);

// 10. Using bracket notation, construct a statement that is false comparing two values in the array using the `>=` operators.

console.log(`${grades[1]} is better than ${grades[7]}.`);
