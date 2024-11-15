function isLeapYearIfElse(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400
            } else {
                return false; // Divisible by 100 but not by 400
            }
        } else {
            return true; // Divisible by 4 but not by 100
        }
    } else {
        return false; // Not divisible by 4
    }
}


const year = 2024;
console.log(`${year} is a leap year (if-else): ${isLeapYearIfElse(year)}`);
