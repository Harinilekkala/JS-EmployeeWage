class EmployeePayrollData
   // property
{
    id; 
    salary;

    //constructor
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name
        this.salary = salary;
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
        return "Id: " + this.id + "\t\tName: " + this.name + "\t\tSalary: " + this.salary;
    }
}
{
    let empdata = new EmployeePayrollData(1, "Harini", 20000);
    console.log(empdata.DisplayEmpDetails());
    empdata.name = "Harshini";
    console.log(empdata.DisplayEmpDetails());
}
