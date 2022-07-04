
//-----UC-1___To Check Status------
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if  (empCheck ==  IS_ABSENT) 
    {
        console.log("UC-1  Employee is Absent.");
    }
    else
    {
        console.log("UC-1  Employee is Present");
    }

}

//------Uc-2 To check Employee Salary----------
{
    const IS_ABSENT = 0;
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const EMP_WAGE_PERHOUR = 20;
    let employeeWageForADay;

    let random = Math.floor(Math.random() * 10) % 3;
    switch(random)
    {
        case IS_ABSENT:
        {
            console.log("Employee is : ABSENT");
            break;
        }
        case IS_PART_TIME:
        {
            console.log("Employee is Working : PART TIME");
            employeeWageForADay = PART_TIME_HOURS * EMP_WAGE_PERHOUR;
            console.log("Employee Wage For a Day: " + employeeWageForADay);
            break;
        }
        case IS_FULL_TIME:
        {
            console.log("Employee is Working : FULL TIME");
            employeeWageForADay = FULL_TIME_HOURS * EMP_WAGE_PERHOUR;
            console.log("Employee Wage For a Day: " + employeeWageForADay);
            break;
        }
    }
}


