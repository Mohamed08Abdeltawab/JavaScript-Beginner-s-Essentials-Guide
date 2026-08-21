//1
class Employee {
  constructor(name) {
    this.name = name;
  }
  getRole() {
    return "Empoyee";
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  getRole() {
    return super.getRole() + " (Manager)";
  }
}


const mang = new Manager("sara", "IT");
console.log(mang.name, mang.department, mang.getRole());