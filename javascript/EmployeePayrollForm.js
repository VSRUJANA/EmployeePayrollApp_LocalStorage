window.addEventListener('DOMContentLoaded', (event) => {
    // Event listener for Name
    const name = document.querySelector('#name');
    const error = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            return;
        }
        try 
        {
            (EmployeePayRollClass()).name = name.value;
            textError.textContent = "";
        }
        catch (e) 
        {
            textError.textContent = e;
        }
    });

    // Event listener for Salary Range
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () 
    {
        output.textContent = salary.value;
    });
});

// Display appropriate value of salary
function ResetValue()
{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = 400000;
}

