/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqmap = new Map();
    for(let num of nums){
        freqmap.set(num, (freqmap.get(num) || 0) + 1);
    }

    return [...freqmap.entries()]
        .sort((a,b) => b[1] - a[1])
        .slice(0,k)
        .map(([num]) => num);
};