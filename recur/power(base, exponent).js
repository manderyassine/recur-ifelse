function power(base, exponent) {
  // Base case: If exponent is 0, return 1 (any number to the power of 0 is 1)
  if (exponent === 0) {
    return 1;
  }
  
  // Recursive case: Multiply base by the result of power(base, exponent - 1)
  return base * power(base, exponent - 1);
}

// Test cases
console.log(power(2, 3)); // Output: 8, because 2^3 = 2 * 2 * 2
console.log(power(5, 0)); // Output: 1, because 5^0 = 1
console.log(power(3, 4)); // Output: 81, because 3^4 = 3 * 3 * 3 * 3
