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
 console.log("\n\nDispalaying Total Days : " +totalWorkingDays + 
             "\nDisplaying Total Hrs Of Employee :" +totalEmpHrs +
             "\nDisplaying Employee Wage : " +empWage);


//-----------UC-7 Using Helper Functions In Array-----------------
// UC 7A - Calculate Total Wage Using Array foreach traversal or reduce method
let totalEmpWage = 0;
let dailyWage=0;
function sum(dailyWage)
{
    totalEmpWage = totalEmpWage+dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("\n\n----------UC7(A)-------------- \n\n Displaying Total Days : " +totalWorkingDays + 
            "\n Displaying Hours : " + totalEmpHrs +
            "\n Displaying Employee Salary : " +totalEmpWage );
function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("\n\n-------------UC7(A)----------\n\n Employee salary with reduce : "+empDailyWageArr.reduce(totalWages, 0)); //Used Reduce


// UC 7B - Show the Day along with Daily Wage Using Array (Map_Helper_Function)
let dailyCounter = 0;
function map_Day_With_Wage(dailyWage)
{
    dailyCounter++;
    return dailyCounter + " = " +dailyWage;
}
let map_Day_With_Wage_Arr = empDailyWageArr.map(map_Day_With_Wage); //helper function(map)
console.log("\n\n------------UC7(B)------------\n\n Displaying Daily Wage Using Helper Function(map) ");
console.log(map_Day_With_Wage_Arr);


// UC 7C - Display number of times full time wage is Earned - Using Filter() function
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullTimeWageArray = map_Day_With_Wage_Arr.filter(fullTimeWage);
console.log("\n\n------------UC7(C)------------\n\n Displaying No Of Times Full Time Wage Is Earned Using Filter() ");
console.log(fullTimeWageArray);


// UC 7D - Displaying first occurence of full time wage is Earned - Using Find() function
function findFulltimeWage(dailyWage)
{
 return dailyWage.includes("160");
}
console.log("\n\n------------UC7(D)------------\n\n Displaying first occurence of full time wage is Earned --------- Using Find() function  ");
console.log(map_Day_With_Wage_Arr.find(findFulltimeWage));


// UC 7E - Displaying is Full time wage Array has only containing 160 - Using every() function
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("\n\n------------UC7(E)------------\n\n Checking ISEVERY ELEMENT is HOLDING FULL TIME WAGE--------- Using every() function  ");
console.log(fullTimeWageArray.every(isAllFulltimeWage));


// UC 7F - Check if there is any PART TIME WAGE - Using Some() function
function partTimeWage (dailyWage)
    {
        return dailyWage.includes("80");
    }
    let partTimeWageCheck = map_Day_With_Wage_Arr.some(partTimeWage);
    console.log("\n\n------------UC7(F)------------\n\n Check if there is any PART TIME WAGE - Using Some() function  ");
    console.log( partTimeWageCheck);
    

// UC 7G - Find the number of Days Employee is Worked
function EmpWorkingDays(WorkingDays, dailyWage)
{
    if(dailyWage > 0)
    
        return WorkingDays+1;
        return WorkingDays;
}   
console.log("\n\n------------UC7(G)------------\n\n Find the number of Days Employee is Worked - Using reduce() function  ");
console.log(empDailyWageArr.reduce(EmpWorkingDays, 0));

