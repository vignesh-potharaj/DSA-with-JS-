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
