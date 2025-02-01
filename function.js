//Function steps:
/*
1. Declaration
2. Invocation/Calling a function

function <name> (arg1, arg2){
<body>
<return/no return>
}
*/
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