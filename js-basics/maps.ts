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