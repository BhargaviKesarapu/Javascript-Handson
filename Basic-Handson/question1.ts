/*1)	Create a class “Person” with properties name,age. 
       Implement a method called “Introduce” that prints out a greeting with the person’s name and age. */
// using constructor with 2 objects

class Person_details{
     name : string = "bhargavi" ;
     age : number = 22;

     introduce () : void {
        console.log (`Hello ${obj.name} : ${obj.age} How are you
        `);
     }
}
let obj = new Person_details();
obj.introduce();

