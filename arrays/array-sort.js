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
        if (!diff) {
            continue;
        }
        let sign = diff/Math.abs(diff);
        if (sign +1) {
            return false;
        }
        
    }
    return true;
}

console.log(isSorted1([1,2,3,4]))
console.log(isSorted1([1,3,2,4]))
console.log(isSorted1([5]))
console.log(isSorted1([]))
