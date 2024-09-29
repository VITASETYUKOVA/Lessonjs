let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 }
    ],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};

function getTotalSalary(department) {
  let totalSalary = 0;

    if (Array.isArray(department)) {
    department.forEach(employee => {
      totalSalary += employee.salary;
    });
  } else {
    const subDepartments = Object.keys(department);
    subDepartments.forEach(subDepartment => {
      totalSalary += getTotalSalary(department[subDepartment]);
    });
  }

  return totalSalary;
}

console.log(getTotalSalary(company)); 