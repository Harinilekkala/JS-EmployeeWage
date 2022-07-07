//---------------UC-6 Arrays------------
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const EMP_WAGE_PERHOUR = 20;
const EMP_MAX_WORKINGDAYS = 20;
const EMP_MAX_WORKINGHOURS = 160;

function getEmpWorkingHours(empCheck)
{  
    switch(empCheck)
    {
        case IS_ABSENT:
        {
            return IS_ABSENT;
        }
        case IS_PART_TIME:
        {
            return PART_TIME_HOURS;
        }
        case IS_FULL_TIME:
        {
            return FULL_TIME_HOURS;
        }
    }
}
function calculateWage(empHours)
{
    return empHours * EMP_WAGE_PERHOUR;
}

//-----------UC-7 Using Helper Functions In Array-----------------
// UC 7A - Calculate Total Wage Using Array foreach traversal or reduce method
{
    let empSalaryForAMonth = 0;
    let dailyWage = 0;
    let empHours = 0;
    let totalEmpHours = 0;
    let totalWorkingDays = 0;
    let dailyWageArray = new Array();
    let empWageMap = new Map();
    let empHrsMap = new Map();
    while(totalEmpHours < EMP_MAX_WORKINGHOURS && totalWorkingDays < EMP_MAX_WORKINGDAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);  
        dailyWage = calculateWage(empHours);
        dailyWageArray.push(dailyWage);
        empWageMap.set(totalWorkingDays,dailyWage);
        empHrsMap.set(totalWorkingDays, empHours);
        totalEmpHours = totalEmpHours + empHours;
        totalWorkingDays++;
    }
    
    //UC7A-ForEach Method
    dailyWageArray.forEach(element => {
        empSalaryForAMonth = empSalaryForAMonth + element;
    });
    console.log("\n\n----------UC7(A)-------------- \n\n Displaying Total Days Using For Each Method");
    console.log("Total Working Hours: " + totalEmpHours + "\nTotal Working Days: " + totalWorkingDays + "\nEmployee Salary for a Month: " + empSalaryForAMonth);
    

    //UC7A-Reduce Method
    function totalWages(dailyWage,totalSalary)
    {
        return totalSalary = totalSalary + dailyWage;
    }
    let monthlyWageReduceMethod = dailyWageArray.reduce(totalWages, 0);
    console.log("\n\n----------UC7(A)-------------- \n\n Displaying Total Days Using Reduce Method");
    console.log("Total Working Hours : " + totalEmpHours + "\nTotal Working Days : " + totalWorkingDays + "\nEmployee Salary for a Month : " + monthlyWageReduceMethod);
    

    // UC 7B - Show the Day along with Daily Wage Using Array (Map_Helper_Function)
    let dayCounter = 0;
    function mapForDayAndWage(dailyWage)
    {
        dayCounter++;
        return dayCounter + " = " + dailyWage;
    }
    let mapDaywithWageArray = dailyWageArray.map(mapForDayAndWage);
    console.log("\n\n------------UC7(B)------------\n\n Displaying Daily Wage Using Helper Function(map) ");
    console.log(mapDaywithWageArray);
    

    // UC 7C - Display number of times full time wage is Earned - Using Filter() function
    function fullTimeWage(dailyWage)
    {
        return dailyWage.includes("160");
    }
    let fullTimeWageArray = mapDaywithWageArray.filter(fullTimeWage);
    console.log("\n\n------------UC7(C)------------\n\n Displaying No Of Times Full Time Wage Is Earned Using Filter() ");
    console.log(fullTimeWageArray);
    

    // UC 7D - Displaying first occurence of full time wage is Earned - Using Find() function
    let firstFullTimeArray = mapDaywithWageArray.find(fullTimeWage);
    console.log("\n\n------------UC7(D)------------\n\n Displaying first occurence of full time wage is Earned --------- Using Find() function  ");
    console.log(firstFullTimeArray);
    

    // UC 7E - Displaying is Full time wage Array has only containing 160 - Using every() function
    let fullTimeWageCheck = fullTimeWageArray.every(fullTimeWage);
    console.log("\n\n------------UC7(E)------------\n\n Checking ISEVERY ELEMENT is HOLDING FULL TIME WAGE--------- Using every() function  ");
    console.log("Is Full Time Wage array only contains 160: " + fullTimeWageCheck);
    

    // UC 7F - Check if there is any PART TIME WAGE - Using Some() function
    function partTimeWage (dailyWage)
    {
        return dailyWage.includes("80");
    };
    let partTimeWageCheck = mapDaywithWageArray.some(partTimeWage);
    console.log("\n\n------------UC7(F)------------\n\n Check if there is any PART TIME WAGE - Using Some() function  ");
    console.log("Is Employee wage contains Part time wage of 80: " + partTimeWageCheck);
    

    // UC 7G - Find the number of Days Employee is Worked
    function employeePresentDays(presentDays, dailyWage)
    {
        if(dailyWage > 0)
        {
            return presentDays+1;
        }
        return presentDays;
    }
    let employeePresentDaysArray = dailyWageArray.reduce(employeePresentDays, 0);
    console.log("\n\n------------UC7(G)------------\n\n Find the number of Days Employee is Worked - Using reduce() function  ");
    console.log("Number of Days Employee present in a Month: " + employeePresentDaysArray);


    // UC - 8 Display Day and DailyWage along with TotalWage using Map
    dayCounter = 0;
    empSalaryForAMonth = 0;
    function dailyAndTotalWage(dailyWage)
    {
        dayCounter++;
        empSalaryForAMonth = empSalaryForAMonth + dailyWage;
        return dayCounter + " = " + dailyWage + " = " + empSalaryForAMonth;
    } 
    let dailyAndTotalWageArray = dailyWageArray.map(dailyAndTotalWage);
    console.log("\n\n------------UC8------------\n\n Display Day , Daily Salary and Total Salary Using Map ");
    console.log(dailyAndTotalWageArray);
    console.log("Total Wage using Map Function: " + Array.from(empWageMap.values()).reduce(totalWages, 0));


    //UC9-Arrow Function
    const findTotal = (totalVal, dailyVal) =>{
        return totalVal + dailyVal;
    }
    let totalHoursArrow = Array.from(empHrsMap.values()).reduce(findTotal, 0);
    console.log("Total Hours Worked by an Employee: " + totalHoursArrow);
    let totalWageArrow = dailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("Total Salary earned by an Employee: " + totalWageArrow);
    console.log("\n\n----------UC - 9------------\n\nEmployee Wage Using Arrow ");

    let fullWorkingDays = new Array();
    let PartWorkingDays = new Array();
    let noWorkingDays = new Array();

    empHrsMap.forEach((value, key, map) =>{
        if(value == 8)
        {
            fullWorkingDays.push(key);
        }
        else if(value == 4)
        {
            PartWorkingDays.push(key);
        }
        else
        {
            noWorkingDays.push(key);
        }
    });
    console.log("Days Employee worked Full Time:");
    console.log(fullWorkingDays);
    console.log("Days Employee worked Part Time: ");
    console.log(PartWorkingDays);
    console.log("Days Employee is Absent: ");
    console.log(noWorkingDays);
}

//UC-10 Displaying Day,Daily Wage,Daily Hrs-----Using Object Creation

let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHours <= EMP_MAX_WORKINGHOURS &&
       totalWorkingDays < EMP_MAX_WORKINGDAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getEmpWorkingHours(empCheck);
    totalEmpHours = totalEmpHours + empHours;
    empDailyHrsAndWageArr.push(
    {
        dayNum : totalWorkingDays,
        dailyHours : empHours,
        dailyWage : calculateWage(empHours),
        toString()
        {
            return '\n\tDay' + this.dayNum + ' => \t Working Hours is ' + this.dailyHours +
            '\t And Wage Earned = ' + this.dailyWage
        },
    
    });
}

console.log("\n------------Uc-10 Object Creation------------\n" +empDailyHrsAndWageArr);


