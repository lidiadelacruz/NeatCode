var topKFrequent = function (nums, k) {
    const arrayMap = new Map() //val: freq
    let frequentElementsArray = new Array() //val = index in this arr, holding an arr of vals
    let resultsArray = []

    for (let i = 0; i < nums.length; i++) {
        let currentEl = nums[i]
        if (arrayMap.has(currentEl)) {
            arrayMap.set(currentEl, arrayMap.get(currentEl) + 1);
        } else {
            arrayMap.set(currentEl, 1);
        }

    }

    for (let [val, freq] of arrayMap) {
        if (frequentElementsArray[freq]) {
            frequentElementsArray[freq].push(val)
        } else {
            frequentElementsArray[freq] = [val]
        }
    }

  
    for (let i = frequentElementsArray.length - 1; i >= 0; i--) {
        if (frequentElementsArray[i]) {
        resultsArray.push(...frequentElementsArray[i])
        }
        if(resultsArray.length === k){
        break
        }
    }
    return resultsArray

};

// leetcode https://leetcode.com/problems/top-k-frequent-elements/

// create a map where the key is the element and value is the # of times we see the element 
// ex.  [1,1,1,2,2,3] map:1:3, 2:2, 3:1    key,value pair
// Afterwards, create an array that will store the values of the map, using for(of), where the key is the idx where the val 
// will be stored within the array ex. [0,0,[3],[2],[1]] create a new array, loop thru this array backwards, if the element 
//in the array is true meaning defined, push it to the results array, break when the results array is the size of K
// 