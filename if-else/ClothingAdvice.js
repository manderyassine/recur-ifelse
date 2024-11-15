function getClothingAdviceIfElse(temp, isRaining) {
    let advice = ""; // Initialize an empty string to build advice

    if (temp <= 5) {
        advice = "Wear a winter coat and gloves";
    } else if (temp <= 15) {
        advice = "Wear a warm sweater and a jacket";
    } else if (temp <= 25) {
        advice = "Wear a long-sleeve shirt or light sweater";
    } else {
        advice = "Wear light clothing like a T-shirt and shorts";
    }

    if (isRaining) {
        advice += ", and carry an umbrella or wear waterproof shoes";
    }

    return advice;
}

const temp = parseInt(prompt("Enter the current temperature (°C):"));
const isRaining = prompt("Is it raining? (yes or no)").toLowerCase() === "yes";

console.log(`Clothing advice (if-else): ${getClothingAdviceIfElse(temp, isRaining)}`);
console.log(`Clothing advice (switch): ${getClothingAdviceSwitch(temp, isRaining)}`);
