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
console.log("First call:", c1()); // Should be 6
console.log("Second call:", c1()); // Should be 7

// Problem 2: Private Variable
// Make a function secretNumber() that stores a number internally but exposes two functions:
// get() → returns the number
// set(x) → changes the number
// But the number should never be directly accessible.

function secret( x:number = 0) {
    function get() {
        return x;
    }
    function set(y: number) {
        x = y;
        return x; 
    }
    return{get, set};
}

const s1 = secret(10);
s1.get() // 10
s1.set(99)
