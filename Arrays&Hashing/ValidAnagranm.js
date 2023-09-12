//  https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

};


/*var isAnagram = function(s, t) {
  let sSorted = s.sort((a, b) => a - b);
  let tSorted = t.sort((a, b) => a - b);

  for (let i = 0; i < s.length; i++) {
      let sChar = s[i];
      let tChar = t[i];
      if (sChar !== tChar) {
          return false;
      }
  }
    return true;
/*};


//Time: O(N log N)| Space: O(1)


// regular being 0(1) Memory  0(n) time 
// count the # of times each char appears in each string 
// compare the # checking that each amount is the same 


//no sorting Time: O(n) | space: O(1) optimal solution



// anagram-reverse a string 
// anagram-using the orignal letters once