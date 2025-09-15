function getAreaOFCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(getAreaOFCircle(3)); // 28.274333882308138

function getRandomPassword() {
    return Math.trunc(Math.random() * 1000000);
}

getRandomPassword(); // e.g., 345678

function calculateTotalWithTax(price, taxRate) {
    return price + (price * taxRate / 100);
}

console.log("Total price for $100 with 15% tax:", calculateTotalWithTax(100, 0.15)); // 100.15
