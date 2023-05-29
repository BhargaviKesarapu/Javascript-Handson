
/* 3)	Write a typescript function that takes in an array of objects and performs the follong operation.
1)	Filter out all person whose age is less than 18.
2)	Map each person’s age to their age multiplied by 2.
3)	Find the first person whose age after the multiplication is greater than 30 and return their name. */
// filter map together age<18 then mul by 2
interface Persons{
    name : string;
    age : number ;
}

const person12 : Persons[] = [{name : "Priya", age : 20}, 
{name : "Hari", age : 13}, 
{name : "Krishna", age : 25}, 
{name : "Shiva", age : 10}];


const ageLessthan18 = (person12:Persons[]) : Persons[] => {
    return  person12.filter(people => people.age < 18); 

}
const ageMulBy2 = (person12: Persons[]) => {

    return person12.map(people => ({...people, age:people.age * 2})); 
    // here map function won't effect the intial array
    
}

const ageGreaterThan30 = (person12: Persons[]):Persons[] =>{
    return person12.filter(people => people.age > 30) ;
}

console.log("The persons whose age is less than 18")
console.log(ageLessthan18(person12));

console.log("The new list after age multiplied by 2");
const x = ageMulBy2(person12);
console.log(x);

console.log("The persons whose age is greater than 30");
console.log(ageGreaterThan30(x));
