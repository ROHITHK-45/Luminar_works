class Student{
    
  constructor(name,age,gender,division){

    this.name=name;
    this.age=age;
    this.gender=gender;
    this.division=division;

  }
  printStudent(){
      console.log(this.name,this.age,this.gender,this.division);
  }

}
var obj=new Student("san",19,"female","Bcom")
obj.printStudent()

var obj1=new Student("roh",20,"male","BCA")
obj1.printStudent()