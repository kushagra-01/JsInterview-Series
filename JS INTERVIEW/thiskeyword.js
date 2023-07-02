// this: this keyword refer to object its belong to or owner object.
// var obj = {
//     name:  "vivek",
//     salary:25000,
//     getName: function(){
//     console.log(this);
//   }
     
// }

// obj.getName();
 
function Person() {
  this.name = "Rahul";
  console.log(this);  // Output: Person {name: "John"}
}

let john = Person();



//this keyword refer another object also
// var obj1 = {
//     name:  "vivek",
//     salary:2400,
//     user: function(){
//     console.log(this);
//   }
     
// }
// var getData = obj1.user;         //object k user function ko liya and store in getData
       
// var obj2 = {
//     name:"akshay",
//     getData 

    
//  };

// obj2.getData();        //output: akshay , so hence this refer to object2