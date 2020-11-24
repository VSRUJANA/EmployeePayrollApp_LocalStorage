window.addEventListener('DOMContentLoaded', (event) => 
{
    // Event listener for Name
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() 
    {
        if(name.value.length == 0) 
        { 
            textError.textContent = ""; 
            return; 
        } 
        try 
        {
            (new EmployeePayRoll()).name = name.value;
            textError.textContent = "";
        }
        catch (e) 
        {
            textError.textContent = e+ " "+e.lineNumber ;
        }
    });

    // Event listener for Salary
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function()
    {
        output.textContent = salary.value; 
    });
});


// Display appropriate value of salary
function ResetValue()
{
    const output = document.querySelector('.salary-output');
    output.textContent = 400000;
}

const save = () => 
{
    try 
    {
        alert(CreateEmployeeObject().toString());
        return false;
    }
    catch (e) 
    {
        return;
    }
}

/*
function save()
{
    let department = [];
    let result = [];
    department = Array.from(document.querySelectorAll("[name = department]"));
    result = department.filter(p => p.checked === true);
    if(result.length > 0)
    {
        try
        {
            alert(createEmployeePayroll().toString());
            return true;
        }
        catch(e)
        {
            alert(e);
            if(e.toString().includes("name"))
                document.querySelector("#name").focus();
            if(e.toString().includes("Date"))
                Array.from(document.querySelectorAll('select')).forEach(p => p.focus());
        }
    }
    else if(result.length <=0)
    {
        alert('Select atleast one department');
        department.forEach(p => p.focus());
        return false;
    }
    return false;
}*/

// Create an object of Employee class
const createEmployeePayroll=()=>
{ 
    let employeePayrollData = new EmployeePayRoll();
    employeePayrollData.name = getInputElementValue('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop(); 
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputElementValue('#salary');
    employeePayrollData.note = getInputElementValue('#notes');
    let date = getInputElementValue('#year')+","+getInputElementValue('#month')+","+getInputElementValue('#day');
    employeePayrollData.startDate = new Date(date)
    return employeePayrollData; 
}

const getSelectedValues = (propertyValue) =>
{
    let allItems = Array.from(document.querySelectorAll(propertyValue)); 
    let sellItems = [];
    allItems.forEach(item => 
    {
        if(item.checked) 
        sellItems.push(item.value);
    });
    return sellItems;
}
            
const getInputElementValue = (id) =>
{
    let value = document.querySelector(id).value;
    return value; 
}