"use strict"

// let arr = ["Ayubxon", "Akbarjon", "Muslimbek", "Ulugbek"]
// Oxirgi elementni olib tashlaydi
// arr.pop()
// Oxiriga qo'shib beradi
// arr.push(6)
// Birinchi elementni olib tashlaydi
// arr.shift()
// arr.unshift(0)
// arr.push(7,8)
// arr.splice(3,1)

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr[4] = true

// for(let key of arr){
//     console.log(key);
// }


// console.log(arr);


// arr.forEach((item,ind, array)=>{
//     console.log(`Sizning ismingiz ${ind+1}, siz ${item} raqam tartibidasiz, ${array} manashu ro'yhat ichidan`);
// })




// let likeWord = [8, 11, 27, 38, 3]


// likeWord.forEach((item, ind, arr)=>{

// })
// let newArr = likeWord.split(",")
// let newStr = newArr.join(",")


// console.log(likeWord)

// console.log(newArr);
// console.log(newStr);

// likeWord.sort((a,b)=>a-b)

// function newSort(a,b){
//     return a - b
// }
// console.log(likeWord);

// 1 - Function decloration

// function age(a,b){
//     console.log(a+b);
// }

// age(12, 30)

// 2 - Function Expression

// let age = function(a,b){
//     console.log(a+b);
// }

// age(12, 42)

// 3 Arrow Function

let age = (a,b)=>{
    return a+b
}
let newAge = age(20, 20)
console.log(newAge);