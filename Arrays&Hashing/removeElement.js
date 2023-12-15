var removeElement = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

//https://leetcode.com/problems/remove-element/

/*
nums = 
[
0, 1,  3,  0,  4,  0,  4,  2], val = 2
                                            R
                    W
let read = write = 0;

while (read < nums.length) {
    if (nums[read] !== val) {//over write W with R val
        nums[write] = nums[read]
        write++
    }
    read++
}

return write;


var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    
    return left;
};

[2, 2,  2,  3], val = 3
                i       
        k  



    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
*/