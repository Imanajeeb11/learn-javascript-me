let vehicle;

vehicle = { type: "Car", model: "Toyota", year: 2020 };

console.log(vehicle["type"]);
console.log(vehicle['type']);
console.log(vehicle.type);
vehicle.wheels=3;
console.log(vehicle.wheels);
vehicle.wheels=[1,2,3,4,5];
console.log(vehicle.wheels);
console.log(vehicle);
vehicle.start=function start(){console.log("START NOW!")};
console.log(vehicle);
console.log(Object.values(vehicle));
console.log(Object.keys(vehicle));