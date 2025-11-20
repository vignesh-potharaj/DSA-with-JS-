// Problem 1: Check if an Array is Sorted (ascending)

function isSorted(arr) {
    for(let i = 0; i < arr.length - 1;i++) {
        if ((arr[i]) > (arr[i + 1]) ) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1,2,3,4]))
console.log(isSorted([1,3,2,4]))
console.log(isSorted([5]))
console.log(isSorted([]))


// Constraint A: No comparison operators
// You cannot use:
// >
// <
// >=
// <=
// ===
// ==
// Basically:
// ❌ NO direct comparisons at all
// But the function must still correctly detect:

function isSorted1(arr) {
    for(let i = 0; i < arr.length - 1;i++){
        let diff = (arr[i] - arr[i+1]);
        if (!diff) continue;
        let sign = diff/Math.abs(diff);
        if (sign +1) {
            return false;
        }
        
    }
    return true;
}
// time complexity -o(n)
// space complexity -o(1)
console.log(isSorted1([1,2,3,4]))
console.log(isSorted1([1,3,2,4]))
console.log(isSorted1([5]))
console.log(isSorted1([]))

// Constraint B:  No early return allowed
// meaning:
// You cannot return inside the loop
// You must finish the entire loop
// Then decide sorted/not-sorted at the end

function isSorted2(arr) {
    let islarger = true;
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i] - arr[i + 1];
        if (!diff) continue;
        let sign = diff / Math.abs(diff);
        if (sign + 1) {
            islarger = false;
            break;
        }
    }
    return islarger;
}

// time complexity -o(n)
// space complexity -o(1)
console.log(isSorted2([1,2,3,4]))
console.log(isSorted2([1,3,2,4]))
console.log(isSorted2([5]))
console.log(isSorted2([]))

// Constraint C: Recursion
// Now the challenge is:
// Rewrite isSorted using recursion instead of loops
// And still NO comparison operators (> < >= <= == ===)

function isSorted3(arr) {
    
}
// time complexity -o(n)
// space complexity -o(1)
console.log(isSorted3([1,2,3,4]))
console.log(isSorted3([1,3,2,4]))
console.log(isSorted3([5]))
console.log(isSorted3([]))
