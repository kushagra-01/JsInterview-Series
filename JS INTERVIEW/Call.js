//object 1
let userdetails = {
    name:"rahul",
    age:25,
    post:"software engineer",
   
    //method function
    printdetails:function() {
        console.log(this);          
        // console.log(this.name);        //its return name of both object ka 
    }
}
userdetails.printdetails();           //call a fucntion through object, in output: give name,age,post.


//object 2
let userdetails2 = {
    name:"avinash",
    age:28,
    post:"testing engineer",

}

// cALL() METHod : its give object2 ka name ,age ,post , 
userdetails.printdetails.call(userdetails2);

//so we cleARLY See call method allow an  userdetails2 object ko to use method function of another userdetails  object ka






