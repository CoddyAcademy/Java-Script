// "use strict"

// //  let num = +prompt("Son kiriting")
// // if(num % 3 == 0 && num % 5 == 0){
// //     console.log("Fizz bazz");
// // }
// // else if(num % 3 == 0){
// //     console.log("Fizz");
// // }
// // else if(num % 5 == 0){
// //     console.log("Bazz");
// // }

// // if(num % 2 == 0){
// //     console.log("juft son");
// // }
// // else{
// //     console.log("Toq son");
// // }

// // Tsikl

// // while

// // let startNum = 1;


// // while(startNum<=20){
// //     console.log(startNum);
// //     startNum++;
// // }


// // do{
// //     console.log(startNum);
// //     startNum++; 
// // }while(startNum <=20)

// // let num = 1;


// // for(let i = 1; i<=10; i++){
// //    if(i == 8){
// //     continue;
// //    }
// //    console.log(i);
    
// // }



// let numberOfSeries = +prompt("Nechta serial ko'rdingiz  ?")

// let seriesDB = {
//    count: numberOfSeries,
//    series: {},
//    actors: {},
//    genres: [],
//    private: false
// }

// function addObj(){
//     for(let i = 0; i <2; i++){
//         let a = prompt("oxirgi ko'rgan serialingiz"),
//         b = prompt("Necha baxo berasiz ?");
     
//         if(a != null && a !="" && b != null && b != ""){
//            seriesDB.series[a] = b
//         }else{
//            i--;
//         }
      
//      }
// }

// function seriesCount(){
//     if(seriesDB.count <5){
//         console.log("Kam serial ko'ribsiz");
//      }
//      else if(seriesDB.count > 5 && 10> seriesDB.count){
//         console.log("Siz classiz tomoshabin ekansiz");
//      }else if(seriesDB.count > 15){
//         console.log("Siz serialchi zvezda ekansiz");
//      }
// }

// console.log(seriesDB);


// addObj()
// seriesCount()

function Obj(a,b){
    console.log(a+b);
}
Obj(12, 12)