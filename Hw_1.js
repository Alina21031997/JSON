//let iteam_1 = 5;
//console.log(iteam_1)
//let iteam_2 = 3;
//console.log(iteam_2)
//let iteam_3 = iteam_1 + iteam_2; 
//console.log(iteam_3)
//let iteam_4 = 'Yolochka';
//console.log(iteam_4)
//console.log(iteam_3 + iteam_4)
//console.log(iteam_3 * iteam_4)
//let iteam_5 = iteam_3;
//let iteam_6 = 15;
//let iteam_6_type = typeof(iteam_6); 
//console.log("iteam_6==", + iteam_6 +"iteam_6_type" + iteam_6_type)
//let iteam_7 = String(iteam_6);
//let iteam_7_type = typeof(iteam_7);
//console.log("iteam_7==", + iteam_7 +"iteam_7_type" + iteam_7_type)
//let age_1 = 10;
//let age_2 = 18;
//let age_3 = 60;
//if   (age_1 < age_2)
//{
//   console.log("You don't have access cause youre age is "+ age_1 +"It's less then")
//}
//else if (age_1 >= age_2 && age_1 < age_3)
//{
//    console.log("Keep calm and look Culture channel")
//}
//else 
//{
//  console.log("Technical word")
//}


//HW_1*,2*
//const checkAge = function(age){ 
  //  if(typeof age == 'number'){
    //if (age<age_2)
    // { 
    // console.log( "You don’t have access cause your age is < 18") 
   //} else if (age >= age_2 && age < age_3 ) { 
    //  console.log("Welcome!") 
   //} else if (age > age_3) {
     //  console.log("Keep calm and look Culture channel") 
   //} else  { 
    // console.log("Technical work") 
   //} 
  //} else {
    //console.log('Not integer value')
  //}
//}

//checkAge(17)
//checkAge(40)
//checkAge(61)

//HW_3*,4*
const checkAge = function(age){
    age = Number (age);
    if (! isNaN(age)) {
      if (age<age_2) { 
      console.log("You don’t have access cause your age is < 18") 
    } else if (age >= age_2 && age < age_3 ) { 
       console.log("Welcome!") 
    } else if (age > age_3) {
          console.log("Keep calm and look Culture channel") 
      } else  { 
        console.log("Technical work") 
     } 
    }else {
        console.log('Not integer value')
      }
     }
checkAge(17)
checkAge(40)
checkAge(61)

let agePromt = promt('Enter age')
checkAge(agePromt)