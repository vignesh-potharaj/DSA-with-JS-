// Add this at the top of closures.ts
console.log("Script is running!");
// 1) Typed Counter Factory
// Goal: createCounter(start?: number): () => number — returns a function 
// that increments and returns the next number.
function createCounter1(start: number = 0) {
    let count = start;
    return function inner(step: number = 1) {
        count += step;
        return count;
    }
}

const c1 = createCounter1(5);
console.log("First call:", c()); // Should be 6
console.log("Second call:", c()); // Should be 7