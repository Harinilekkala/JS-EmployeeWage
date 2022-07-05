//---------------UC-6 Arrays------------
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const Wage_Per_Hour = 20;

function getWorkingHours(empCheck)
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

function calDailyWage(empHrs)
{
    return empHrs * Wage_Per_Hour;

}
const Max_Hrs_InMonth = 160;
const Num_Of_Working_Days = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= Max_Hrs_InMonth && totalWorkingDays <  Num_Of_Working_Days)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage( empHrs)); // Using Stack push and pop methods-----here LIFO is perform
}
 let empWage = calDailyWage(totalEmpHrs);
 console.log("Dispalaying Total Days : " +totalWorkingDays + 
             "\nDisplaying Total Hrs Of Employee :" +totalEmpHrs +
             "\nDisplaying Employee Wage : " +empWage);
