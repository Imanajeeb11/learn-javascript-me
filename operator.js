let x=10;
let y=20;

console.log(x==y); //equality only checks for value
console.log(x===y); //strict equality checked for value and type
console.log(x!=y);
console.log(x!==y);
console.log(x>y);
console.log(undefined==y); //undefined always gives false 
console.log(undefined>=y); //undefined always gives false 

const a = 1n; 
const b = 0n; 
const quotient = a / b; 
console.log(quotient) ;

const quotient1 = b === 0n ? undefined : a / b; // dividing by BigInt zero gives Range error
console.log("quo1-->",quotient1);

//ternary operator
// (condition) ? true : false;
//  x===10 ? 1 : 2; means->
if(x===10){
    return 1;
}else{
    return 2;
}

// & - bitwise operator
// && - logical AND
// logical operators
//bitwise operators
//more

