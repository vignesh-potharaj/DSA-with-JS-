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