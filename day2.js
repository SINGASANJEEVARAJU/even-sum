num=+prompt("enter anumber:")
evensum=0,oddsum=0
for(i=0;i<num;i++){
    if(Number[i]%2==0){
        evensum=evensum+Number[i]
        
    }else{
        oddsum=oddsum+Number[i]
    }
    res=(evensum>oddsum)?"evensumis more":"odd sum is more"
}

console.log(res)
// num=+prompt("enter anumber:")
// evensum=0,oddsum=0
// for(i=0;i<num;i++){
//     if(Number[i]%2==0){
//       evensum++
        
//     }else{
//      oddsum++
//     }
//     res=(evensum>oddsum)?"evens  numbers are more":"odds  numbers are more"
// }

// console.log(res)
// num=+prompt("enter anumber:")
// evensum=0,oddsum=0
// for(i=0;i<num;i++){
//     if(Number[i]%2==0){
//       evensum++
        
//     }else{
//      oddsum++
//     }
//     res=(evensum<oddsum)?"both are equal":"both are not equal"
// }

// console.log(res)