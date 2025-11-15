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
