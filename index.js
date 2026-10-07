function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}


console.log(calculateTax(100));                    // 10
console.log(convertToUpperCase("hello"));          // HELLO
console.log(findMaximum(10, 20));                  // 20
console.log(isPalindrome("level"));                // true
console.log(isPalindrome("hello"));                // false
console.log(calculateDiscountedPrice(100, 20));    // 80



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };