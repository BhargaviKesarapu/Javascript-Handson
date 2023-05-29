
/* 4)	Write a typescript function that takes in an array of objects representing products. 
    Each product object has properties for “name” and “price”. Implement a function that finds 
    the product with the lowest price and returns the same. */
// using for each loop
    
interface Products{
    name : string;
    price : number;
}

const product :Products[]= [{name : "Product1", price : 1000},
                            {name : "Product2", price : 400},
                            {name : "Product3", price : 300},
                            {name : "Product4", price : 800}];

const lowestPrice = (product : Products[]) =>{
    let lowPrice = product[0].price;
    let LowPriceProductName = product[0].name ;
    for(const i of product)
    {
        if(i.price < lowPrice && i.name != null)
        {
            lowPrice = i.price;
            LowPriceProductName = i.name;
        }
    }
    return [lowPrice, LowPriceProductName];
    
}
console.log(`The product with the lowest price is "${lowestPrice(product)[1]}" and the price is ${lowestPrice(product)[0]}`);







