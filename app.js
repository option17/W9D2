
//  MY function takes 2 parameters and then my variable stores the result.
 //  Then my times function takes my variable from above and x5 and now times stores that result.
 //   The return is the end of my function. and gives me the result.
 // My console.log shows on my debug console te end result.
 
function myFunction(a, b){
    let sum = a + b;
    let times= sum*5;

    return times
}

let result = myFunction(5,12)

console.log(result);

// I have made a function. I then made a variable called `intro`, 
// I then made a variable called `length` that will store the result of the length of my intro.
// I have told my code that if the result stored in `length` is greater than 10
// Return`true` in the console. Otherwise show the anwser `false`
// Here my function ends.
  // My function is called, and ran.

function myFunction2(){

    let intro = "Hello ";
    let length = intro.length;
  
if(length > 10){
    return true
    
} else{return false }
    
}

    let here = myFunction2()

    console.log(here)
  






