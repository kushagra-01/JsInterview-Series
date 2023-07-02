//Callback() function 
function add(x, y, displayResult) {
    var result = x + y;
    displayResult(result);                  //callback is displayResult function jisme result ko pass kr diya(loc6) and called it to execute
  }
  
  //displayresult  is a callback function  here result ko as  parameter takes
  function displayResult(result) {                      
    console.log("The output is: " + result);
  }
  
  add(2, 3, displayResult);        //x me 2, y me 3 and callback variable me displayResult function ko .
 
  // outputs "The result is: 5"
  


  