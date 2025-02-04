//rest parameter
function subt(...x){
    console.log(typeof(x),x)
    console.log("first element of array-->",x[2]);
}

subt(1)
subt(1,2,3)
function subt1(x){
    console.log(typeof(x),x)
    console.log("first element of array-->",x[0]);
}

subt1(1)
subt1(1,2,3)

function subt2(y,z,...x){ //rest parameter is always last
    console.log(typeof(x),x)
    console.log("first element of array-->",x[2]);
}

subt2(1)
subt2(1,2,3)

//destructuring
const y = [2,45];
const [t,s] = [1, "Hello"]
console.log(t);

//destructuring with rest parameter
const [a,b,...c] = [1,2,3,4,5];
console.log(a,b,c);

//Spread operator
function abc(a,b,...c){
    console.log(a,b,c);
}

abc(1,2,3,4,5);