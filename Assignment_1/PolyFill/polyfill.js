// ========================filter =====================================
let arr=[1,2,3,4,5]
function mapPolyFill(arr,cb){
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
       if(cb(arr[i])){
        newArr.push((arr[i]));
       }

    }
 return newArr
}
function square(x){
//  console.log(x);   
if(x%2==0){
    return x;
}
}

console.log(mapPolyFill(arr,square));

// reduce=========================================

// let arr=[1,2,3,4,5]
// function mapPolyFill(arr,cb,initial=arr[0]){
//     let acc=initial;
//     for (let i = 0; i < arr.length; i++) {
//     acc=cb(arr[i],acc)

//     }
//  return acc;
// }
// function reduce(x,acc){

//     return (acc*x);
// }

// console.log(mapPolyFill(arr,reduce));

// =================map==================

// let arr=[1,2,3,4,5]
// function mapPolyFill(arr,cb){
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(cb(arr[i]));

//     }
//  return newArr
// }
// function square(x){
// return x*x;

// }
// console.log(mapPolyFill(arr,square));