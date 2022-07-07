// UC - 11 Creating Employee Payroll Details
// UC - 12 Creating DAte And Gender
class EmployeePayrollData
   // property
   {
    id; 
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

   // getter and setter method
    get name() 
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }
    
    // method
    DisplayEmpDetails()
    {
        const DateFormat = { year: 'numeric' , month: 'long' , day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US" , DateFormat)
        return "id= " + this.id + "\t\tName: " + this.name + "\t\tSalary: " + this.salary + 
                "\t\tGender: " + this.gender +"\t\tStartDate : " +empDate;
    }
}
{
    let empdata = new EmployeePayrollData(1, "Harini", 20000 , 'F');
    console.log(empdata.DisplayEmpDetails());
    empdata.id = 2;
    empdata.name = "Haritha";
    empdata.salary = 30000;
    empdata.gender = 'F'
    console.log(empdata.DisplayEmpDetails());
    let empdata2 = new EmployeePayrollData(3, "Harshini", 40000 , 'F' , new Date());
    let empdata3 = new EmployeePayrollData(4, "Hardin", 40000 , 'F' , new Date());
    console.log(empdata2.DisplayEmpDetails());
    console.log(empdata3.DisplayEmpDetails());   

}
