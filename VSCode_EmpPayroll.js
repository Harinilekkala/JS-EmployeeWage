// UC - 11 Creating Employee Payroll Details
// UC - 12 Creating DAte And Gender
// UC - 13 Implementing Concept On Regex Pattern ------------ Using Try And Catch

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

    set name(name)
    {
        let nameCheck = RegExp('^[A-Z]{1,}[a-zA-Z]{2,}$')
        if(nameCheck.test(name))
        {
            this._name = name;
        }
        else
        {
            throw "\n\n-------Raising Exception--------\n\nValiadting the name in given regular expresion to follow the rule : must have \n1.Must have capital letter \n2.Atleast 3 characters\n";
        }
        
    }
    
    // method
    DisplayEmpDetails()
    {
        return "id= " + this.id + "\t\tName: " + this.name + "\t\tSalary: " + this.salary + 
                "\t\tGender: " + this.gender +"\t\tStartDate : " +this.startDate;
    }
}
{
    const date = new Date();
    let empdata = new EmployeePayrollData(1, "Sony", 20000 , 'F');
    console.log(empdata.DisplayEmpDetails());
    try
    {
        console.log("\n\n-------------------------Displaying Valid Regex-----------------------------");
        empdata.id = 2;
        empdata.name = "Sai"; //The Regex Is Satisfying
        empdata.salary = 90000;
        console.log(empdata.DisplayEmpDetails());

        empdata.id = 5;
        empdata.name = "bai"; //The Regex Is Not Satisfying
        empdata.salary = 80000;
        console.log(empdata.DisplayEmpDetails());


    }
    catch(ex)
    {
        console.error(ex);
    }  

    let empdata2 = new EmployeePayrollData( 3, "Harshini", 40000 , 'F' , new Date());
    let empdata3 = new EmployeePayrollData(4, "Hardin", 40000 , 'F' , new Date());
    console.log(empdata2.DisplayEmpDetails());
    console.log(empdata3.DisplayEmpDetails());   

}
