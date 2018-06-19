class Employee {
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee('Atticus', '2405', '47000', 3);
const jem = new Employee('Jem', '62347', '63500', 4);
const scout = new Employee('Scout', '6243', '74750', 5);
const robert = new Employee('Robert', '26835', '66000', 1);
const mayella = new Employee('Mayella', '89068', '35000', 2);

const employees = [atticus, jem, scout, robert, mayella];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

class EmployeeBonus {
  constructor(name, bonusPercentage, totalCompensation, totalBonus) {
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }
}

console.log(employees);

function processEmployees(employeeName) {
  for (let i = 0; i < employees.length; i++) {
    bonusEval(employees[i]);
  }
}

function bonusEval(employeesPer) {
  let tempEmp = employeesPer;
  let bonusVal = 0;

  if (tempEmp.reviewRating <= 2 && tempEmp.reviewRating > 0) {
    //console.log('No Bonus');
    bonusVal = 0;
  } else if (tempEmp.reviewRating === 3) {
    //console.log('bonus is' + tempEmp.annualSalary * .04);
    bonusVal = .04;
  } else if (tempEmp.reviewRating === 4) {
    //console.log('bonus is' + tempEmp.annualSalary * .06);
    bonusVal = .06;
  } else if (tempEmp.reviewRating === 5) {
    //console.log('bonus is' + tempEmp.annualSalary * .1);
    bonusVal = .1;
  } else {
    //console.log('INVALID RATING');
  }

  if (employeesPer.employeeNumber.length === 4) {
    bonusVal += .05;
    //console.log('In Employee Per ' + bonusVal)
  }

  if (employeesPer.annualSalary > 65000) {
    bonusVal -= .01;
    //console.log('In Employee Per2 ' + bonusVal + employeesPer.name);
  }

  if (bonusVal > .13) {
    bonusVal = .13;
    //console.log('In Employee Per3 ' + bonusVal + employeesPer.name);
  }

  if (bonusVal < 0) {
    bonusVal = 0;
    //console.log('In Employee Per4 ' + bonusVal + employeesPer.name);
  }
  createBonusPackage(tempEmp.name, bonusVal, tempEmp.annualSalary);
}

function createBonusPackage(name, bonusPercent, salary){
  
  
let finalizedBonus = new EmployeeBonus(name, bonusPercent*100 +'%', (1+bonusPercent)*salary, bonusPercent*salary);
//console.log(finalizedBonus);
return finalizedBonus;


}

processEmployees();
