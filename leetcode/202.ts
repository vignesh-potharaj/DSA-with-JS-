function isHappy(n: number): boolean {
    const seen = new Set<number>();
    while(n !== 1) {
        if(seen.has(n)) return false;
        seen.add(n);
        const digits = String(n).split('').map(Number);
        n = digits.reduce((sum, num) => sum + (num*num),0);
    }
    return true;
};
// time - O(log)n
// space - O(log)n
function isHappy(n: number): boolean {
    const seen = new Set<number>();
    while(n !==1 && !seen.has(n)){
        seen.add(n);
        n = Array.from(String(n),Number).reduce((total, num) => total += num * num,0)
    }
    return n ===1;
};