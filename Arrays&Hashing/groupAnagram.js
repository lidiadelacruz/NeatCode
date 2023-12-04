/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function makeKey(str) {
    let alphabetArr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        alphabetArr[char.charCodeAt()-97]++
    }
    console.log("alphabetArr", alphabetArr)
    return JSON.stringify(alphabetArr)
}

var groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [strs]
    }

    const leyend = new Map()

    for (let i = 0; i < strs.length; i++) {
        let key = makeKey(strs[i])
        if (leyend.has(key)) {
            leyend.get(key).push(strs[i])
        } else {
            leyend.set(key, [strs[i]])
        }
    }
 return [...leyend.values()]
};


//create an empty array to keep the collection of grouped anagrams
//iterate thru each element in the array using two pointers, compare if either element is an anagram with each other, 




//LEETCODE Problem
//https://leetcode.com/problems/group-anagrams/