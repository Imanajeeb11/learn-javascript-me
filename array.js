/*4 steps: 
1. Declaration
2. Initialization
3. Access/Read
4. Update/Mutate/Assign/Change */

const students=["Aditi", "Aakash", "Amit",{},[],""];
console.log(students);
console.log(students[1]);
const length_of_students_array=students.length;
console.log("Length of array-->", length_of_students_array);
console.log(students[length_of_students_array]); //undefined
console.log("Last element of array-->",students[length_of_students_array-1]); //last element is an empty string


//const students1:string=["Aditi", "Aakash", "Amit"]; //typescript added: it can only have elements with type String

vehicle = { type: "Car", model: "Toyota", year: 2020 };
const values=(Object.values(vehicle));
const keys=(Object.keys(vehicle));
console.log(typeof values); //object array
const length=values.length;
console.log("No. of elements in object-->",length);

//Playing with an empty array
const arr=[];
console.log(arr.length); //zero
arr[2]="Ima";
console.log(arr); //[ <2 empty items>, 'Ima' ]
console.log(arr.length);
console.log("TypeOf Array-->",typeof(arr));
console.log(arr[0]+arr[1]+arr[2]); //NaNIma
arr[0]=2+1;
arr[1]=function total(){console.log(arr.length);};
console.log(arr[0]+arr[1]+arr[2]); //3function total(){console.log(arr.length);}Ima
//arr[1]=total();
//console.log(arr[0]+arr[1]+arr[2]); //total is not defined
//arr[1]=function total(){console.log(arr.length);};function total();// we can't call a function in an array item
//console.log(arr[0]+arr[1]+arr[2]); //
