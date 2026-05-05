/*
today  i learnt what is the diffrence between  undefined and not undefined  



*/  

// when we print this  a  it will be undefined because a is a global variable
console.log(a);
var  a ;
console.log(a); // first  the javascript engine will allocate memory for a varible  so the default value is ->  undefined

a = "thayub";
console.log(a);  // we declare the value for a variable

function fun(){
    let x =  10;
}
console.log(x);

// we can't access the x variable because this x is in function scope 

