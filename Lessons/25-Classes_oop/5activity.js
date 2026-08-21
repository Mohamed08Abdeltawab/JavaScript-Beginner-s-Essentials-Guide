class Student {
  name = "Unknown";
  grade = 0;

  introduce() {
    console.log(this.name + " has grade " + this.grade);
  }

  promote() {
    this.level = "Next Level";
  }
}


//3
const s1 = new Student();
const s2 = new Student();

s1.introduce();
s2.introduce();

//4,5
console.log(s1.level); // undefined

s1.promote();
console.log(s1.level);

s1.name = "mohamed";
s1.grade = 22;
s1.introduce();

