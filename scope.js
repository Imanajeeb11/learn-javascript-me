let x=10;
function test(){
    let x=20;
    console.log(x);
}

function test1(){
    let x=30;
    console.log(x);
function test2(){
    let x=40;
    console.log(x);   
    }
    test2();
}
console.log(x);
test();
test1();

//block scope
{
    let x=50;
    console.log(x);    
}
