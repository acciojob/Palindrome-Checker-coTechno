// complete the given function

function palindrome(str){
let string = str.toLowerCase()

let reverse = ''
for(let i= string.length()-1; i>=0; --i){
    reverse += string.charAt(i)
}
string.equals(reverse) ? console.log('String is Palondrome.') : console.log('String is Not Palondrome.')

}
module.exports = palindrome
