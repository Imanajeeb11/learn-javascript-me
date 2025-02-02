//Function steps:
/*
1. Declaration
2. Invocation/Calling a function

function <name> (arg1, arg2){
<body>
<return/no return>
}
*/
//const h = getName1({name:"Hello2"}); // will give an error - as we can't invoke a function-expression/arrow function before function declaration
const newName1 = getName2;
console.log("getName2-->",newName1);

function myfunc(){
console.log("This is my statement inside a function");
return 0;
}
myfunc();
const output = myfunc();
console.log(output);

//another function
function start() {
    console.log("This is a function"); // statement 1
  }
  
  start;
  
  start(); //--> this runs line 1 in func Body, i.e statement 1
  // o/p->This is a function
  
  //another function
  function stop() {
    const x = 10; // statement 1
    return x; // statement 2
  }
  
  stop();

  const val1= stop; //FUNCTION EXPRESSION : stop is a function so val1 is also a function
  console.log("val1-->",val1);
  console.log("typeof-->",typeof(val1)); // function is a function datatype
  const val2=stop();
  console.log(val2);
  const val3=val1();
  console.log(val3);

  //way1
  const move1=function (){console.log("Hello1")}; //function expression way to declare a function
  console.log("Move1-->",move1);

  //way2 simple way of function declaration
  function move(){
    console.log("Move-->",move);
    console.log("Hello2");
  }
  move1();
  move();


//IIFE - Immediately Invoked Function expression--> (function a(){})();
  
const x = function (){ // this is anonymous function
  console.log(10);
  return "Hello";
};


  const move2 = (function (){
    return "hello";
  })();

  const myName = (function name1() {
    return "Hello";
  })();
  
{
    function name1() {
      return "Hello";
    }
  
    const myName = name1();
}


{
  function stop1(){
    const x = 10; // statement 1
    return x; // statement 2
  }   
  const val21 = stop1();
}

const val211 = (function stop11(){
  const x3 = 10; // statement 1
  return x3; // statement 2
}  )();

console.log(val211);

const person ={name:"Ima", age:25};
function getName(o){
  return o.name; //shows this is an object
}

const n = getName(person);
const f = getName({name:"Hello", age:25});
console.log(n);
console.log(f);

//Arrow function

//1.normal way

function getName2(o){
  return o.name; 
}

 //2. function expression way
/*
const getName = function(o){
  return o.name;
}*/

//3. arrow function way
const getName1 = (o) => { //this is an arrow function
  return o.name;
}
//const g = getName1({name:"Hello2"});
console.log(getName1);

function newfunc(k){
  return k.model;     //every function returns something, if we will not write return statement it will always return undefined.
}
const k1 = newfunc("hello");
const k2 = newfunc(20);
const k3 = newfunc([10,20.30]);
const k4 = newfunc({model:"2025",price:100});
console.log({k1,k2,k3,k4});
console.log("hello".x);
let v=25;
console.log(v.name);