// complete the given function

function palindrome(str){
let string = str.toLowerCase()

let reverse = ''
for(let i= string.length-1; i>=0; --i){
    reverse += string.charAt(i)
}
if (string === reverse) return true

return false
}
module.exports = palindrome
