// Write the prefix sum function:

import { PerformanceNodeTiming } from "perf_hooks";

function prefixSum(arr: number[]) {
    if(arr.length === 0) return[];
    let newArr: Array<number> = [arr[0]];

    for(let i = 1; i < arr.length;i++) {
        newArr.push(arr[i] + newArr[i-1]);
    }
    return newArr;
}


console.log(prefixSum([2,5,3,1]))  
console.log(prefixSum([1,1,1,1]))
console.log(prefixSum([]))      


// Get the sum of arr[l…r] in O(1).

// Example:
// arr = [2, 5, 3, 1]
// prefix = [2, 7, 10, 11]
// sum(1, 3) = 5 + 3 + 1 = 9\


const arr: number[] = [2, 5, 3, 1];

function sum(arr: number[], start: number, end: number) {
    if(arr.length === 0) return 0;

    if(start < 0 || end < 0 || start >= arr.length || end >= arr.length) 
        throw new RangeError(" start/end out of range");

    if(start > end ) {
        let temp: number = start;
        start = end;
        end = temp;
    }

    let prefix: number[] = prefixSum(arr);
    let result: number = 0;
        if (start === 0) {
        result = prefix[end];

    } else {result = prefix[end] - prefix[start - 1];}
    return result;

}
console.log(sum(arr,1, 3));
console.log(sum([2,5,3,1], 0, 2)); 
console.log(sum([2,5,3,1], 1, 3));
console.log(sum([1,1,1,1], 2, 3));