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
    if(arr.length === 0) return null;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right];
        arr[right] = temp;
        left ++;
        right --;
    }
    return arr;

}




// timecomplexity -> o(n)
// spacecomplexity -> O(1)
console.log(reverseArray1([1,2,3]))
console.log(reverseArray1(['a','b','c']))
console.log(reverseArray1([]) )


// No temporary variable allowed (swap without temp)

function reverseArray2(arr){
    if (arr.length === 0) return null;
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        i++;
        j--;
    }
    return arr;
}


// timecomplexity -> o(n)
// spacecomplexity -> O(1)

console.log(reverseArray1([1,2,3]))
console.log(reverseArray1(['a','b','c']))
console.log(reverseArray1([]) )

