function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    let maxProfit: number[] = [];
    let temp: number[] = prices;

    for (let i = 0; i < prices.length - 1; i++) {
        temp = prices.slice(i + 1);
        let profit :number = Math.max(...temp) - prices[i];
        if (profit <= 0) {
            maxProfit.push(0);
        } else {
            maxProfit.push(profit);
        }
    }
    return Math.max(...maxProfit);
};


// my space and time
// time complexity O(n^2)
// space complexity O(n)
//  optimal space and time 
// O(1) space
// O(n) time

// lets make it optimal


