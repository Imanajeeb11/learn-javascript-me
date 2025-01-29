console.log('Hello world');
console.log('typeof null-->', typeof null);
var a;
let b;
const c=20;
console.log(a);
console.log(b);
console.log(c);

const arr=[];
console.log(typeof arr);
const obj={};
console.log(typeof obj);

var arr1=[];
 arr1=[1,2,3,4,5];
console.log(arr1);

var obj1={};
 obj1={a:1,b:2,c:3,d:4,e:5};
console.log(obj1);

var obj2={};
 obj2={1:'a',2:'b',3:'c',4:'d',5:'e'};
console.log(obj2[2]);

var obj3={};
 obj3={1:'a',true:'b',3:'c',4:'d',5:'e'};
console.log(obj3[true]);
console.log(obj3['true']);

var obj4={};
 obj4={1:'a','true':'b',3:'c',4:'d',5:'e'};
console.log(obj4[true]);
console.log(obj4['true']);