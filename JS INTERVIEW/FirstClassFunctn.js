{/*In JavaScript, a first-class function refers to the concept of treating as first-class citizens function.
 This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.*/}


//Condition1: passed as a argument to another functn
function add(x, y, displayResult) {
    var result = x + y;
    displayResult(result);                  
  }
  

  function displayResult(result) {                      
    console.log("The output is: " + result);
  }
  
  add(2, 3, displayResult);         //calling a function with argument
 


  
  //Condition2: can be assigned to variables
  const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  
  greet('John');
   // Outputs: Hello, John!
  



 //condition 3: returned as values from other functions
   function test() {
   
    return function() {
      console.log("test hof function return a function as a result");
    }
     
  }
  let hof=test();
  hof();