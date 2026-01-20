function longestCommonPrefix(strs: string[]): string {
    if (strs.length <= 1) return "";
    let result = strs[0];
    for(let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(result)) {
            result = result.slice(0,-1);
        }
        if(result === "") return result;
    }
    return result;
};