/*

This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock. The best function will be given an array of stock prices in the order they happened throughout the day. It should return the maximum possible profit on the stock for that day.


For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
best([15, 10, 20, 22, 1, 9])
12

*/


// for every number except the first one in the array, I want to check all the differences between the number and the numbers before it, and I want to store the highest difference in a results array. look at the results array, and find the highest number. if the number is above 0, return that number, otherwise return 0

function best(arr) {
    let results = [];

    
    // check the length of the array. if there's only one item, return 0
    if (arr.length === 1) {
        return 0;
    }


    // start for loop at 2nd index of the array because we don't want to include the first number
    for (let i = 1; i < arr.length; i++) {
        // this for loop has the i - 1 because we don't want to subtract k from itself (k - k). We want to subtract k from all of the numbers before it. setting the condition at k < -1 allows us to include the first index
        for (let k = i - 1; k > -1; k--) {
            let difference = arr[i] - arr[k];

            // push the results of the subtraction to the results array
            results.push(difference);
        }
    }


    let biggest = results[0];

    // iterate through all numbers in our results array
    for (let i = 0; i < results.length; i++){
        if(results[i] > biggest){
            biggest = results[i]
        }
    }


    // if biggest number is greater than 0, return num, otherwise return 0
    if (biggest > 0) {
        return biggest;
    } else {
        return 0;
    }
}


let testArr = [5, 12, 6, 9, 43, 2];
//let oneNum = [5];
//let noProfit = [5, 4, 3, 2, 1];

console.log(best(testArr));
//console.log(best(oneNum));
//console.log(best(noProfit));




/*

Alternate solution:
const best = prices => {
    let maxDiff = 0
    let lowSoFar
  
    for (let i = 0; i < prices.length; i++) {
      if (lowSoFar === undefined || prices[i] < lowSoFar) {
        lowSoFar = prices[i]
      }
  
      let diff = prices[i] - lowSoFar
  
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
  
    return maxDiff
  }

*/