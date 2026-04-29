const assert = require('node:assert');
const greet = require('./app'); 

try {
    console.log("Starting Tests...");

    // Test Case 1: Check if the greeting is correct
    const result = greet("Mohamed");
    assert.strictEqual(result, "Hello, Mohamed!", "❌ Error: Greeting message is incorrect");
    
    // Test Case 2: Ensure it handles different names
    const result2 = greet("World");
    assert.strictEqual(result2, "Hello, World!", "❌ Error: Failed with name 'World'");

    console.log("✅ All tests passed successfully!");
} catch (error) {
    console.error("Test Failed!");
    console.error(error.message);
    process.exit(1); // Exit with error code 1 for GitHub Actions
}