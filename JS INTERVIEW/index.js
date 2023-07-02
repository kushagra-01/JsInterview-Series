//Create a Buffer and store  "Rahul" .
const buffer = new Buffer.from("Rahul");


// buffer.write("codevolution");       
// //move this text into buffer but its not store full word coz buffer have fixed size of memory so its only storeno - codev


console.log(buffer.toString());      //convert into string
console.log(buffer);                 //convert into  utf-8 encoding value
console.log(buffer.toJSON());         //convert into json object 


//for output type in terminal - node index.js 