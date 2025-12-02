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

function maxProfit1(prices: number[]): number {
    if (prices.length < 2) return 0;
    let maxProfit1: number = 0;
    let minPrice: number = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice =  prices[i];
        }
        let profit: number = prices[i] - minPrice;

        if (profit > maxProfit1) {
            maxProfit1 = profit;
        }
    }
    return maxProfit1;
};

// O(1) space
// O(n) time
// now we have the perfect code with optimal space and time