// Return a new array with elements in reverse order.
function reverseArray(arr) {
    let newarr = [];
    for(i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    return newarr;
}

// timecomplexity -> o(n)
// spacecomplexity -> O(n)
console.log(reverseArray([1,2,3]))
console.log(reverseArray(['a','b','c']))
console.log(reverseArray([]) )

// Constraint1:Reverse In-Place (two pointers)
// No new array allowed.
function reverseArray1(arr) {
    
}

// timecomplexity -> o(n)
// spacecomplexity -> O(n)
console.log(reverseArray1([1,2,3]))
console.log(reverseArray1(['a','b','c']))
console.log(reverseArray1([]) )


