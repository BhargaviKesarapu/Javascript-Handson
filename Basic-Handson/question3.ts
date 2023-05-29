
//3)	Implement a function that takes in an array of numbers and returns the sum of all the numbers.
// for each for array
let array : number [];
let sum : number = 0;

const add = (array : number[]) : number => {
    
    for(const i of array)
    {
        sum = sum + i ;
    }
    
    return sum;
}

const totalSum = add ( [1,2,3,4,45,32] );
console.log (totalSum);
