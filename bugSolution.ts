function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    throw new Error("Invalid input type. Both parameters must be numbers.");
  }
}

const result1 = addSafe(1, 2); // Works
const result2 = addSafe("1", 2); // Throws error
const result3 = addSafe(1, "2"); // Throws error