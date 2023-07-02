function Person(name,age,gender){
    this.name = name;                  //P is capital and this keyword refer current object value
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");   //new keyword is used to create new object
  console.log(person1);
  
  var person2 = new Person("Anjali", 34, "female");
  console.log(person2);

  var person3 = new Person("Lilly", 17, "female");
  console.log(person3);



 {/*In the code above, we have created a constructor function named Person. Whenever we want to create a
 new object of same properties (name,age,gender) and method Person function so We need to create it 
 by using the new keyword}*/}


 