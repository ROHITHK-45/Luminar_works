class Person{
    bike(){
        console.log("passion pro");
    }

}
class Child extends Person{
    bike(){
        super.bike()
        console.log("bullet");
    }
    
}
var obj=new Child()
obj.bike()