//jab bhi constructor banaoge aur kuch aisa mil gaya joki sabme same hai to usey kabhi bhi directoe maein banana galat tareekaota hai// 

//sahi tareeka hai prototype ka use karna kyukiprototype mai save karne par jitne bhi new ke sath instance banaoge wo sare instance by default tumhari proto ki value ko hold karenge

class Toffee {
   constructor(flavor,brand,price){
    this.flavor = flavor;
    this.brand = brand;
    this.price = 10 ; //hard coded

}

}

let t1 = new Toffee("choclate","cadbury");
let t2 = new Toffee("milk","nestle");


