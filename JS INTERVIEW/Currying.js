function Addition(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
let res=Addition(2);    //CALL A Addition function and pass a argument value 
console.log(res);           //a ko le k functuon b,c ko as it is return kr dega check console, coz b,c argument pass krna baki hai 
let data = res(4);         //b argumnet ko pass
let final= data(5);        // c argumnet pass        
console.log(final);        //now finally a,b,c ko add kr k 11 output kr dega 

//by currying method output will come very easily
let res1=Addition(2)(4)(5);
console.log(res1);