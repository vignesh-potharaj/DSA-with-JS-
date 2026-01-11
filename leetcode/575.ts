function distributeCandies(candyType: number[]): number {
    const n = candyType.length;
    const map = new Map<number, number>();
    for(let i = 0; n > i; i++) {
        if(map.has(candyType[i])) {
            map.set(candyType[i], map.get(candyType[i])! +1);
        } else {
            map.set(candyType[i],0);
        }
    }
    const maxEat = n/2;
    const mapSize = map.size;
    return Math.min(mapSize,maxEat);
}