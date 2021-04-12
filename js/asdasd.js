// function createPhoneNumber(numbers){
//     let caracteristica = '';
//     let numeroTel = '';
    
//     for(let i=0; i<10; i++){

//       if(i <= 2){
//           caracteristica += numbers[i].toString();
//       }
      
//       if(i >= 3){
//         if (i == 6){
//           numeroTel += '-';
//         }
//         numeroTel += numbers[i].toString();
//       }
//     }
//     return '(' + caracteristica + ')' + ' ' + numeroTel;
// }
function findOutlier(integers){
    let p = 0,
        i = 0,
        np = 0,
        ni = 0;
    for (number of integers){
        if (number % 2 !== 0){
            i += 1;
            ni = number;
            
        } else{
            p += 1;
            np = number;
        }
    }
    if(p < i){
        return np;
    } else {
        return ni;
    }

}
  
  
findOutlier([2,6,8,10,3]);

