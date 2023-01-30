const employee = {name: "Sam",
streetAddress: "11 Broadway"}

function updateEmployeeWithKeyAndValue(employee, key, value){
       
    return {...employee,[key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway"
    return {...employee,[key]: value}
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    return {newEmployee, key}
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    delete employee.streetAddress
    const newEmployee = employee
    return newEmployee
}