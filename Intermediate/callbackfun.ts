
/* 2)	Write a function that takes in an array of numbers and a callback function.
     The function should apply the callback function to each element in the array 
     and return a new array with the modified values */
//functions types- named fun 
const initialArray = [1,2,3,4,5];
const newArray : number[] = [];
 const numSquare = (num : number) : number =>{
    return num * num ;
 }

 const modifiedarray = (array1 : number[], square : (n : number) => number) : number[] => {
    for (const i of array1){
        let x = square(i);
        newArray.push(x);
    }
    return newArray;
 }

 const arr = modifiedarray(initialArray, numSquare);
 console.log("The new array with the modified values is : "+arr);