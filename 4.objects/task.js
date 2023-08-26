function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student ("Maria", "female", 18);
new Student ("Artem", "male", 21);
new Student ("Denis", "male", 25);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
   if (this.marks) {
    marks.forEach((item) => {
        this.marks.push(item)});
   }
}

Student.prototype.getAverage = function () {
    if (!this.marks) {
        return 0;
    } 
    else {
        let result = this.marks.reduce((acc,item, index, arr) => {
            acc += item;
            if (index === arr.length - 1) {
                return acc / arr.length;
            } 
            else {
                return acc;
            }
        }, 0)
        return result;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
