function findStudentById(students, id) {
  // Your code here
  let result = null;
  for (let each of students) {
    if (each.id === id) {
      result = each;
    }
  }
  return result;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
