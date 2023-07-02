//Ex -1
Abc()
function Abc() {
  console.log("hello world");
    
} 
//output - hello world (function is declartion after calling but its still its give output coz here function declararion moved to top: hoisting work! )


//EX-2
console.log(x);
var x;
//output: undefined  (even when variable declaration is write after its used still no error cones , i.e var x hoisted on top when run )

 
//EX-3
console.log(y);
var y = 10;   

/*output: undefined  (jabki output 10 should comes !! its coz declaration is hoisting not intializiation 
 here how its work -
                var y;
                console.log(y)
                 y=10;  
                                */



//ex-5
var z= 10;
console.log(z);
var z;

