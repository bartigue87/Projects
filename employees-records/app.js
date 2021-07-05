const employees = [];

function Employee(name, jobTitle, salary, status = 'Full Time') {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = function () {
    console.log(
      `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`
    );
  };
}

const brandon = new Employee('Brandon', 'Web Developer', 75000, 'Contract');
const michaela = new Employee('Michaela', 'Nurse', 66000);
const ian = new Employee('Ian', 'Personal Trainer', 40000, 'Part Time');

brandon.printEmployeeForm();
michaela.printEmployeeForm();
ian.printEmployeeForm();

employees.push(brandon, michaela, ian);
console.log(employees);
