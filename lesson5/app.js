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



let numberOfSeries;

function startApp(){
    numberOfSeries = +prompt("Nechta serial ko'rdingiz  ?")
    while(numberOfSeries == null || numberOfSeries == "" || isNaN(numberOfSeries)){
      numberOfSeries = +prompt("Nechta serial ko'rdingiz  ?")
    }
}
startApp()

let seriesDB = {
   count: numberOfSeries,
   series: {},
   actors: {},
   genres: [],
   private: false
}

function addObj(){
    for(let i = 0; i <2; i++){
        let a = prompt("oxirgi ko'rgan serialingiz"),
        b = prompt("Necha baxo berasiz ?");
     
        if(a != null && a !="" && b != null && b != ""){
           seriesDB.series[a] = b
        }else{
           i--;
        }
     }
}

function seriesCount(sc){
    if(sc <5){
        console.log("Kam serial ko'ribsiz");
     }
     else if(sc > 5 && 10> sc){
        console.log("Siz classiz tomoshabin ekansiz");
     }else if(sc > 15){
        console.log("Siz serialchi zvezda ekansiz");
     }
}
addObj()
seriesCount(seriesDB.count)

function showDB(hidden){
   if(!hidden){
      console.log(seriesDB);
   }
}
showDB(seriesDB.private)


