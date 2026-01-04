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


console.log(firstUnq([4, 5, 1, 2, 0, 4, 1]));



// 3️⃣ Find the Most Frequent Element

// Input: [1, 3, 3, 2, 1, 3]
// Output: 3
// Requires:
// value → count
// Map only.

function mostFreq(arr: number[]): number | null {
    const map = new Map<number, number>();
    for(let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let maxCount: number = 0;
    let mostFrek: number | null = null;
    for (let [num, count] of map.entries()) {
        if(count > maxCount) {
            maxCount = count;
            mostFrek = num;
        }
    }
    return mostFrek;
}


console.log(mostFreq([1, 3, 3, 2, 1, 3]));


// 4️⃣ Two Sum (classic)

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Requires mapping:
// value → index
// Set is useless here.

// 5️⃣ Anagram Check

// Input: "listen" "silent"
// Output: true
// Requires:
// char → frequency
// Map job.

function anagramCheck(str1: string, str2: string){
    if(str1.length !== str2.length) return false;
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    for(let char of str1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for(let char of str2) {
        map2.set(char,(map2.get(char) || 0) +1);
    }
    for(let [char, count] of map1) {
        if(map2.get(char) !== count) {
            return false;
        }
    }
    return 'is anagram';
}

console.log(anagramCheck('listen','silent'));

// 6️⃣ Character Frequency in String

// Input: "vignesh" → {v:1,i:1,g:1,n:1,e:1,s:1,h:1}
// Set cannot hold counts.

function charFreq(str: string) {
    const map = new Map<string, number>()
    for(let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}

console.log(charFreq('vignesh'));
console.log(charFreq('mukhesh'));
console.log(charFreq('meghana'));
console.log(charFreq('luffy'));

// 7️⃣ Group Anagrams

// Input:
// ["eat","tea","ate","tan","nat","bat"]
// Output groups based on sorted keys
// Requires Map of:
// sortedWord → listOfWords

// Set cannot do this.

// 8️⃣ Subarray Sum Equals K
// This is where Maps become REAL DSA tools.
// Input: [1,2,3], k = 3
// Output: 2 subarrays
// Uses prefix sum map:
// prefixSum → count
// Absolute Map problem.

// 9️⃣ Longest Substring Without repeating Characters
// Uses Map to track last index of character:
// char → index
// This is an interview must-do.

// 🔟 Count Distinct Elements in Every Window of Size K
// Sliding window + Map counts.
// Set cannot do dynamic decrement/increment.