//jab bhi constructor banaoge aur kuch aisa mil gaya joki sabme same hai to usey kabhi bhi directoe maein banana galat tareekaota hai// 

//sahi tareeka hai prototype ka use karna kyukiprototype mai save karne par jitne bhi new ke sath instance banaoge wo sare instance by default tumhari proto ki value ko hold karenge


//sabse pehlle property ko aapke object mein dhundenge nahi milato prototpe mein dhundte hai//

/* function Toffee(name,price){
    this.name= "#)" + name;
    this.price=price;

    this.printMyNmame= function(){
        console.log(this.name)
        
    }
    this.printMyPrice= function(){
        console.log(price)
    }
}
let t1 = new Toffee('kaccha aam',2);
let t2 = new Toffee('melody',3);*/


function Employee(name,age,id,salary){
    this.name = name;
    this.age = age;
    this.id= id;
    this.salary = salary;

}

Employee.prototype.printDetails = function() {
    console.log(
        `${this.name} is my name and i am ${this.age} years old my employee id is ${this.id} and my salary is rs ${this.salary}`
    );
};

let e1 = new Employee('shubham',31,14,35000);



