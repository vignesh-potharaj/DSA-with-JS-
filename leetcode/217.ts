function containsDuplicate(nums: number[]): boolean {
    const check = new Set(nums);
    if(nums.length !== check.size) {
        return true;
    }
    else return false;
};