//ex1: test hof return a function as a result
function test() {
   
  return function() {
    console.log("test hof function return a function as a result");
  }
   
}
let hof=test();
hof();
// test()      - its not work ,doesnt give output by calling test() function directly



//ex-2 (higherOrder fucntion wch take function as a paramter,return a result too.)
function higherOrder(load) {              //hof function take load function as a parameter 
  load();                                //now calling load function (call krna compulsory hai ).
}

function load() { 
  console.log("Hello world")
 };

 higherOrder(load);         //calling a higherOrder and pass a load function(compulosry) as parameter to console output!


//output: Hello world

