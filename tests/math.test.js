const { add, subtract, multiply } = require("../src/math");

// Simple test runner (no external deps needed!)
let passed = 0;
let failed = 0;

// function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ ${description}`);
    passed++;
  } catch (err) {
    console.log(`  ❌ ${description}`);
    console.log(`     ${err.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    },
  };
}

// --- Tests ---
console.log("\n🧪 Running tests...\n");

console.log("add()");
test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
test("adds negative numbers", () => expect(add(-1, -2)).toBe(-3));
test("adds zero", () => expect(add(5, 0)).toBe(5));

console.log("\nsubtract()");
test("subtracts two numbers", () => expect(subtract(10, 4)).toBe(6));
test("subtracts to negative", () => expect(subtract(3, 7)).toBe(-4));

console.log("\nmultiply()");
test("multiplies two numbers", () => expect(multiply(3, 4)).toBe(12));
test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));

// --- Summary ---
console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1); // Non-zero exit = CI failure
}
