// Problem 1: Count frequency of each element
const nums: number[] = [1,1,2,3,3,3];

function freqMap(arr: number[]): Map<number, number> {
    let result = new Map<number, number>();
    for( let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (result.has(num)) {
            result.set(num, result.get(num)! + 1)
        } else {
            result.set(num, 1);
        }
    }
    return result;
}

console.log(freqMap(nums));

// Problem 2: Find the first element that repeats

function repeats(arr: number[]){
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            return arr[i];
        } else {
        map.set(arr[i], true)
        }
    }
    return 'no repeating elements'
}

console.log(repeats([5, 1, 4, 8, 1, 4]));  // Output: 1

// Problem 3: Check if two arrays have any element in common
function twoCommon(arr1: number[], arr2: number[]): boolean {
    const map = new Map();
    for(let num of arr1) {
        map.set(num, true);
    }

    for(let num of arr2) {
        if(map.has(num)) {
            return true
        }
    }
    return false;
}
let A = [1, 7, 9]
let B = [5, 7, 10]
console.log(twoCommon(A, B));  


// Problem 4: First Non-Repeating Element using map

function firstUnq(arr: number[]): number | null {
    let result: number = 0;
    const map = new Map();
    
    for(const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(const num of arr) {
        if(map.get(num) === 1) return num;
    }
    return null;
}

// THE PROBLEM IS WE NEED TO FIND OUT THE FIRST NON REPEATING NUMBER FROM AN ARRAY
// - USING MAPS
// -PASS ONLY AN ARRAY
// - WE NEED TO RETURN A NUMBER
// HOW ABOUT WE CREATE A AN ARRAY OF REPEATING NUMBERS AND RETURN THE FIRST ONE
// -NOTE: IF WE CAN DO THIS WE CAN UPGRADE THE CODE TO DIRECTLY RETURN THE FIRST RETURNING VARIABLE
// SO HOW DO WE DO CREATE AN ARRAY OF REPEATING ELEMENTS USING A MAP
// THE QUESTION IS WHY AN ARRAY WHY NOT A MAP( WHY MAP=> ARRAY=> NUMBER WHEN MAP=>NUMBER IS POSSIBLE)
// LETS CREATE A MAP WHERE ELEMENTS WHICHB ARE REPEATED ARE RPESENT


console.log(firstUnq([4, 5, 1, 2, 0, 4, 1]));
