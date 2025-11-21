console.log("Arrays File Loaded.");

// Problem 1: Find the Maximum Element
// **Write a JS function findMax(arr) that returns the maximum number.

// // No built-in max functions allowed.**
// Constraints:
// No Math.max()
// Must scan array manually
// Must return null if array is empty

function findMax(arr) {
    if (arr.length === 0 ) {
        return null;
    }
    let maxNUM = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNUM) {
            maxNUM = arr[i];
        }
    }
    return maxNUM;
}

console.log(findMax([2, 9, 4, 1])); 


// Problem 2: Find the Minimum Element
// Requirements:
// =Return the smallest number
// =No built-ins (Math.min not allowed)
// =Return null if array is empty

function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;

}   

console.log(findMin([5, 2, 9, 1]));

// Problem 3: Reverse an Array (Without reverse())

// Requirements:
// Modify the array in-place
// No extra array allowed
// Use two-pointer technique
// Swap elements until they meet in the middle

function reverseArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4]));


// Problem: Linear Search (Basic Version)

// Goal:
// Write a function that returns the index of a target number in an array.

function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return ('not found');
}

console.log(search([2, 5, 9, 4], 9))
console.log(search([2, 5, 9, 4], 100))

// You must rewrite the search function without using ===.

function search1(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return ('not found');
}

console.log(search1([2, 5, 9, 4], 9))
console.log(search1([2, 5, 9, 4], 100))

// No direct equality operators at all
// You must detect the match without equality operators.
// You're allowed:
// <
// >
// <=
// >=
// You're NOT allowed:
// ===
// ==
// !=
// !==

function search2(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target && arr[i] >= target) {
            return i;
        }
    }

    return ('not found');
}

console.log(search2([2, 5, 9, 4], 9))
console.log(search2([2, 5, 9, 4], 100))

// You cannot use:
// ===
// ==
// !==
// !=
// <=
// >=

// can use:
// <
// >

function search3(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] < target) && !(arr[i] > target) ){
            return i;
        }
    }

    return ('not found');
}

console.log(search3([2, 5, 9, 4], 9))
console.log(search3([2, 5, 9, 4], 100))

// You’re allowed:
// +
// -
// /
// *
// ! (logical NOT)
// &&
// ||
// if, return, loops, etc.
// You are NOT allowed:
// ANY comparison operator

function search4(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let diff = (arr[i] - target)
        if (!diff){
            return i;
        }
    }

    return ('not found');
}

console.log(search4([2, 5, 9, 4], 9))
console.log(search4([2, 5, 9, 4], 100))



// You cannot use for, while, do, or any loop-like iteration (including for...of, for...in).
// You can use:
// recursion (function calling itself)
// array indexing (arr[i])
// early returns
// === / other comparisons (allowed)
// helper parameters (index counters)
// slice / concat / array methods if you want (but they’re unnecessary)
function search5(arr, target, i = 0) {
    if (i === arr.length) return 'Not Found'
    if(arr[i] === target) return i;
    return search5(arr,target, i + 1)
}

console.log(search5([2, 5, 9, 4], 9))
console.log(search5([2, 5, 9, 4], 100))

// Restriction #6 — No index parameter allowed
// You CANNOT use:
// i
// helper parameter
// extra argument
// default argument
// inner helper function with i
// slice
// splice
// loops of any kind
// You must write search using pure recursion on array structure.
// ❗Only allowed:
// arr.length
// arr[0]
// arr[1], arr[2], etc. ONLY via recursion
// comparisons
// slicing is NOT allowed (too easy)
// no loops

function search5(arr, target){
    if (arr[0] === target) return 0;
    return 

}
