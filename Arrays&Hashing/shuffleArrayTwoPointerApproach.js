var shuffle = function(nums, n) {
    let pointer1 = nums[0];
    let pointer2 = nums[n];
    let shuffleArr = []

    while(pointer2 < nums.length){
       shuffleArr.push(pointer1)
       shuffleArr.push(pointer2)
       pointer1
       pointer2++
    } 
  return shuffleArr
};


//https://leetcode.com/problems/shuffle-the-array/

//Test cases

//nums = [2,5,1,3,4,7] n=3
//nums = [1,2,3,4,4,3,2,1] n=4
//nums = [2,5,1,3,4,7] n=3