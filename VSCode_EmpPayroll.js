// UC - 11 Creating Employee Payroll Details
// UC - 12 Creating DAte And Gender
// UC - 13 Implementing Concept On Regex Pattern ------------ Using Try And Catch
// UC - 14 , UC -15 Implementing employee Payroll Data VAlidation Using Regex Pattern

class EmployeePayrollData
{
    // property
    id; 
    salary;
    gender;
    startDate;
    email;
    zipCode;
    
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.email = params[5];
        this.zipCode = params[6];
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
    //Checking Id IS non zero positive number

    get id() 
    {
        return this._id;
    }
    set id(id)
    {
        let idCheck = RegExp('^[1-9]{1}([0-9]*)$')
        if(idCheck.test(id))
        {
            this._id = id;
        }
        else
        {
            throw "\n\nEmployee ID must have non-zero positive number";
        }
    }
    //Checking Salary Non Positive Number
    
    get salary() 
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryCheck = RegExp('^[1-9]{1}([0-9]*)([.]*)[0-9]*$')
        if(salaryCheck.test(salary))
        {
            this._salary = salary;
        }
        else
        {
            throw "Employee salary must have non zero positive number";
        }
    }

    //Checking Gender M or F
    get gender() 
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderCheck = RegExp('^[M|F]{1}$')
        if(genderCheck.test(gender))
        {
            this._gender = gender;
        }
        else
        {
            throw "Employee gender must have M or F";
        }
    }
    //Checking DAte Not A Future Date
    get startDate() 
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        let presentdate = new Date();
        let dateCheck = RegExp("^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$");
        if(startDate <= presentdate.toLocaleDateString())
        {
            if(dateCheck.test(startDate))
            {
                this._startDate = startDate;
            }
            else
            {
                throw "Invalid Format";
            }
        }
        else
        {
            throw "Employee Start Date will  be less than or equal to present Date";
        }
    }
    
    //Checking MAil Id With Exact Format
    get email() 
    {
        return this._email;
    }
    set email(email)
    {
        let emailCheck = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$')
        if(emailCheck.test(email))
        {
            this._email = email;
        }
        else
        {
            throw "Invalid Email ID";
        }
    }

    //Checking ZipCode
    get zipCode() 
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let zipCodeCheck = RegExp('^[0-9]{6}$')
        if(zipCodeCheck.test(zipCode))
        {
            this._zipCode = zipCode;
        }
        else
        {
            throw "Invalid zipCode";
        }
    }
    
    // method
    DisplayEmpDetails()
    {
        return "Id: " + this.id + ",\tName: " + this.name + ",\tSalary: " + this.salary + ",\tGender: " + this.gender + ",\tStartDate: " + this.startDate +
                ",\tEmail: " + this.email + ",\tZip Code: " + this.zipCode;
    }
}
{
    try
    {
        
        let empdata = new EmployeePayrollData(1, "Harini", 20000, "F", new Date("11/10/2022").toLocaleDateString(), "abc123@gmail.com", 123456);
        console.log(empdata.DisplayEmpDetails());
        empdata = new EmployeePayrollData(2, "Harshini", 25000, "F", new Date("20/12/2021").toLocaleDateString(),"xyz@gmail.com", 789123);
        console.log(empdata.DisplayEmpDetails());
        empdata.id = 3;
        empdata.name = "Chandini";
        empdata.salary = 20000;
        empdata.gender = "F";
        empdata.startDate = new Date("10-12-2022").toLocaleDateString();
        empdata.email = "abc123@gmail.com";
        empdata.zipCode = 567234;
        console.log(empdata.DisplayEmpDetails());

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
}
let empdata2 = new EmployeePayrollData(3,"Harshini",40000,'F',new Date());
let empdata3 = new EmployeePayrollData(4, "Hardin", 40000,'F',new Date());
console.log(empdata2.DisplayEmpDetails());
console.log(empdata3.DisplayEmpDetails());

