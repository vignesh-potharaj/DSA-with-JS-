// Write the prefix sum function:


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



// Task: implement the naive O(n²) solution that returns the indices 
// of two numbers that add to target.

function twoSum(arr: number[], target: number): [number, number] | null {
    if (arr.length <= 1) return null;
    for (let i = 0; i < arr.length - 1;i++) {
        for (let j = i + 1; j < arr.length;j++) {
            if (arr[i] + arr[j] === target) {
                return [i,j]
                break;
            }
        }
    }
    return null;
}

console.log(twoSum([2,7,11,15], 9));    // [0,1]
console.log(twoSum([3,2,4], 6));        // [1,2]
console.log(twoSum([3,3], 6));          // [0,1]
console.log(twoSum([1,2,3], 7));        // null


// leetcode #1


function twoSum2(arr: number[], target: number): [number, number] | null {
    if (arr.length < 2) return null;
    const map = new Map<number, number>();

    for (let i = 0; i < arr.length;i++) {
        const complement: number = target - arr[i];
        if(map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(arr[i],i);
    }
    return null;
}

// time complexity O(n)
// space complexity O(n)
console.log(twoSum2([2,7,11,15], 9));    // [0,1]
console.log(twoSum2([3,2,4], 6));        // [1,2]
console.log(twoSum2([3,3], 6));          // [0,1]
console.log(twoSum2([1,2,3], 7));        // null



function twoSum3(arr: number[], target: number): number[][] {
  const map = new Map<number, number[]>(); // value -> list of indices seen so far
  const result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const complement = target - x;

    // if we have previous indices for the complement, emit all pairs [prevIdx, i]
    if (map.has(complement)) {
      const indices = map.get(complement)!;
      for (const prevIdx of indices) {
        result.push([prevIdx, i]);
      }
    }

    // record current index for value x
    if (map.has(x)) {
      map.get(x)!.push(i);
    } else {
      map.set(x, [i]);
    }
  }

  return result;
}
console.log(twoSum3([1,5,5,1], 6));
console.log(twoSum3([1,5,5,1], 6));
// [[0,1],[0,2],[1,3],[2,3]]

console.log(twoSum3([2,2,2], 4));
// [[0,1],[0,2],[1,2]]

console.log(twoSum3([1,2,3], 7));
// []

console.log(twoSum3([], 5));
// []
