// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
} // Calculating net salary
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2: Function Expression
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}; // Determining Final Price
// Test Data
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let feeRates = { "Premium": 0.15, "Standard": 0.10, "Basic": 0.05 };
    let fee = amount * (feeRates[serviceType] || 0);
    return `Service Fee: $${fee.toFixed(2)}`;
}; // Service Fee Calculation

// Test Data
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"