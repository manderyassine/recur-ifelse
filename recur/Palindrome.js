function isPalindrome(s) {
  // Step 1: Remove spaces, punctuation, and convert to lowercase
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  // Step 2: Define the recursive helper function
  function helper(left, right) {
    // Base case: If the left index meets or crosses the right, it's a palindrome
    if (left >= right) return true;
    // Recursive case: If characters match, keep checking inward
    if (s[left] === s[right]) {
      return helper(left + 1, right - 1);
    }
    // If characters don't match, it's not a palindrome
    return false;
  }

  // Start the recursion from the outermost characters
  return helper(0, s.length - 1);
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello"));                          // Output: false
