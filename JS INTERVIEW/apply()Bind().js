let userdetails = {
    name:"rahul",
    age:25,
    post:"software engineer",

    printdetails:function(state,country) {
        // console.log(this);              //this keyword refer the current object properties(name,age,post value)
        console.log(this.name+ " " +state +" " +country);        //its return name of both object ka 
    }, 
}
 //call a fucntion through object
// userdetails.printdetails("Delhi","India");           
// userdetails.printdetails(["goa","pune"]);  

//object 2
let userdetails2 = {
    name:"avinash",
    age:28,
    post:"testing engineer",

}

//call() METHOD take a agrument indivisually or separetely
userdetails.printdetails.call(userdetails2,"Mumbai","India");

//apply() method take a argument as an array form
userdetails.printdetails.apply(userdetails2,["shimla","asam"]); 

//bind() : make a copy of object function and when need then called it
let copy = userdetails.printdetails.bind(userdetails2,"rajsthan", "goa")
copy();



var cars = ["maruti","ford","nano"]
 cars.push("ferrari, lambo");
 console.log(cars);