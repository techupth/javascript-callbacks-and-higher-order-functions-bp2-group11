// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
let newArray = [];
for(let i=0; i< array.length; i++)
{ 
newArray.push(operation(array[i]))
}
return newArray
};

function addSalary(salaryArray) {
  return salaryArray + 5000
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries = forEach(employeeSalaries,addSalary);


console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
