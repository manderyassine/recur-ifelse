function getTicketPriceIfElse(age) {
    if (age <= 12) {
        return "$10"; // Children
    } else if (age >= 13 && age <= 17) {
        return "$15"; // Teenagers
    } else if (age >= 18) {
        return "$20"; // Adults
    } else {
        return "Invalid age";
    }
}


const ageIfElse = 16; 
console.log(`Ticket price (if-else): ${getTicketPriceIfElse(ageIfElse)}`);
