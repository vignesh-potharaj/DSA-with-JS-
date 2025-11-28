// Problem 1: Counter Function

// Create a function createCounter() that returns another function.
// Each call to the inner function should return the next number.

function createCounter(start = 0) {
   let v = start;
    return function inner(step = 1) {
        v += step;
        return v;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Problem 2: Private Variable
// Make a function secretNumber() that stores a number internally but exposes two functions:
// get() → returns the number
// set(x) → changes the number
// But the number should never be directly accessible.


function secretNumber() {
    let x = 10;
    function get() {
        return x;
    }
    function set(y) {
        x = y;
        return x; 
    }
    return {get, set}
}

const s = secretNumber();
console.log(s.get()); // 10
console.log(s.set(99));
console.log(s.get()); // 99


// Problem 3: Adder Factory
// Make a function createAdder(x) which returns a new function that
//  adds x to any given number.

function createAdder(x = 0) {
    return function add(y) {
        return x + y;    
    }
}

const add5 = createAdder(5);
console.log(add5(3)); // 8
console.log(add5(3)); // 8

// Problem 4: Execution Limit
// Create a function limit(fn, n) that returns a new function which will:
// call fn only the first n times
// after that, return "limit reached"


function limit(fn, n) {
    let count = 0;
    return function() {
        if(count >= n) {
            return "limit reached";
        }
        count ++;
        return fn();

    }
}

function hi() {
    return "hello"
}
const limitedHi = limit(hi, 2);
console.log(limitedHi()); // "hello"
console.log(limitedHi()); // "hello"
console.log(limitedHi()); // "limit reached"

// Problem 5: Once Function
// Write a function once(fn) that ensures a function runs only one time, and all 
// future calls return the first result.
function once(fn) {
    let called = false;
    // storing result 
    let result;
    return function() {
        if (!called) {
            // making the result permanent
            result = fn();
            // making sure the result is never changed as the if will be never true
            // causing only returning of the result whenever the function is called
            called = true;
        }
        return result
    }
}


function randomNum() {
    return Math.random();
}

const oneRandom = once(randomNum);
console.log(oneRandom()); // always same value
console.log(oneRandom()); // always same value
console.log(oneRandom()); // always same value
console.log(oneRandom()); // always same value


// Problem 6: Memoization
// Write a memoize(fn) that caches results of a function based on its argument.
// basically remembering the result of a function

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache) {
            return cache[key];
        }
        const result = fn(...args)
        cache[key] = result;
        return result;
        
    }
}

function slowSquare(n) {
  console.log("calculating...");
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5)); // calculating... 25
console.log(fastSquare(5)); // 25 (no log this time)
console.log(fastSquare(10)); // calculating... 100 (different key!)
console.log(fastSquare(10)); // 100 (cached)

// Problem 7: Loop with Closure Fix
// Fix this code so it prints 0 1 2 3 4:

function closureFix() {
    for (var i = 0; i < 5; i++) {
    (function (n) {
          setTimeout(() => console.log(n), 1000);
    })(i);
    }
}
closureFix();

// Problem 8: Function Queue
// Create a function createQueue() that uses closure to maintain a private queue.

function createQueue() {
    let queue = [];
    function enqueue(a) {
        return queue.push(a);
    }
    function dequeue() {
        if (queue.length === 0) return "empty";
        return queue.shift();
    }
    return {enqueue, dequeue}
}

const q = createQueue();

console.log(q.enqueue(10))
console.log(q.enqueue(20))
console.log(q.dequeue()) // 10
console.log(q.dequeue()) // 20
console.log(q.dequeue()) // "empty"
