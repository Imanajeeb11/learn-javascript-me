const x= undefined;
const y= null;
const z=false;
const a=0;
const b="";
const c=0n; //Bigint zero
const d=NaN; //not a no.

//the below are not falsy------
const e=[];
const f={};

const x = 1n; 
const y = 0n; 
const quotient = x / y; 
console.log(quotient) ;

const x = 1n; 
const y = 0n; 
const quotient = y === 0n ? undefined : x / y; 
console.log(quotient);