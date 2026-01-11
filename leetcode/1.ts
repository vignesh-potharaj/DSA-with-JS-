// leetcode #1

function twoSum1(arr: number[], target: number): [number, number] | null {
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
console.log(twoSum1([2,7,11,15], 9));    // [0,1]
console.log(twoSum1([3,2,4], 6));        // [1,2]
console.log(twoSum1([3,3], 6));          // [0,1]
console.log(twoSum1([1,2,3], 7));        // null
function twoSum(nums: number[], target: number) {
    if(nums.length <= 1) return null;
    const map = new Map<number, number>();
    for(let i = 0 ; nums.length > 1;i++) {
        let complement: number = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement),i];
        }
        else {
            map.set(nums[i],i);
        }
    }
};