//g  RegExr expression
const text = "rahul is a very very nyc guy wch is very intelligent"
const regex = /very/g
console.log(text);
console.log(text.replace("very", 'such'));   //it replace only ist very with such.
console.log(text.replace(regex,'such'));      //By regex repace all very ~ such word se.


//test() use where i use for find
const str = "The quick brown fox jumps over the lazy dog.";
const regex1 = /dog/i;
const found = regex1.test(str);             //checking dog is present or not 
console.log(found); 
// Output: true                        //dog chararcter is present in str variable me  so return true



//exec() RegExr use 
const string = 'hello how are you '
const regex2 = /how/;
const found1=regex2.exec(string)
console.log(found1);
//output :  [ 'how'  index:6  input: hello how are you ]

const string1 = 'hello how are you '
const regex3 = /yello/
const found2=regex3.exec(string)
console.log(found2);
//output : null  (coz yello is not present in string1 me)


