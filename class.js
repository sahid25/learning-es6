class student {
  constructor(studentId, studentName) {
    this.Id = studentId;
    this.Name = studentName;
    this.School = "AL-Emdad Degree Collage Chondor-Pur";
  }
}
class student2 {
  constructor(sId, SName) {
    this.Id = sId;
    this.Name = SName;
    this.School = "AL-Emdad Degree Collage chhondor-Pur";
  }
}
const getResult = new student(117, "Ashraf Ahmed Sahid");
const getResult2 = new student2(15, "someone seven");
// console.log(getResult, getResult2);
console.log(getResult.Id, getResult2.Name);