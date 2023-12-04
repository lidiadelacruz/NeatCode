var isAnagram = function(s, t) {
    let splitS = s.split("")
    let splitT= t.split("")
    let result = true
    
   
    let validAnagram = {}
   
    splitS.forEach((char) => {
       if(char in validAnagram) {
        validAnagram[char] = validAnagram[char] + 1  
       } else {
       validAnagram[char] = 1
       }
       
    })
   
   
    splitT.forEach((char) => {
        if(char in validAnagram) {
          validAnagram[char] = validAnagram[char] + 1  
       } else {
           result = false
       }
   })
    return result

}

//Dictionary Approach 

// Create two dictionaries for each string

//Iterate thru each char in the str and set the object's key-value pair for the str, set the char as the key and set the value to 1, if the char already exists in the dictionary increase the value + 1 then return false


