function isPalindrome(str){
   // base case for single and odd length string
    if(str.length === 1) return true; 
    //base case for even string || string with length of 2
    if(str.length === 2) return str[0] === str[1]; 
    //checking most front & back character is equal
    // if equal, recusion with remaining string after slice
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1)); 
    //else, NOT a palindorme
    else return false;
}

console.log(isPalindrome('a'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('raar'));
console.log(isPalindrome('palindrome'));