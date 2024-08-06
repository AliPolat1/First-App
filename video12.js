/*  
let str = "ben 17 yaşındaym ve 2007 yılında doğdum"
let pattern = "ali"
let flag = "gi"
let regEx = new RegExp(pattern, flag)
// let regEx = new RegExp("ali", "gi")

let word = /salak/
let comment = "Sen salak mısın kardeşim?"

console.log(word.test(comment))
*/

/*
let string = "I love JavaScript"
console.log(
    string.match(/love/ig)
)
*/

/*
const message = "Selam ben Javascript. Javascript çok iyi bir yazılım dilidir. Javascript diyim sen gerisini anlarsın zaten."

let matchReplaced   = message.replace(/Javascript/gi,"C#")
console.log(matchReplaced)
*/
const str = "Ben ali 17 yaşındayım. 2007 Yılında doğdum."

console.log(
    //str.match(/\D/g)
)

let isim = "ali"

console.log(
    /^[a-z]+$/.test(isim)
)
