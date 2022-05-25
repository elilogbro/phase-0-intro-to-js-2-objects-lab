// Write your solution in this file!
const employee = {};
employee.name = "Joe Blow";
employee.streetAddress = "9000 S Broadway";

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newObj = { ...employee };
newObj[key] = value;
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const thirdObj = { ...employee }
    delete thirdObj[key];
    return thirdObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];
   return employee;
}