//  Q no 91

let favouriteFruits:string[]=["Mango","Banana","Apple"];
favouriteFruits.push("Grapes","Papaya");
console.log(favouriteFruits);

//  Q no 92

function removeLastElement<T>(arr:T[]): T | undefined{
return arr.pop();
}

const fruits:string[]=["Apple","Mango","Banana","Papaya"]

console.log(removeLastElement(fruits));

console.log(fruits);

//  Q no 93

function replaceBananaWithMango(fruits0:string[]):void{
 const index = fruits0.indexOf("Banana");
 if(index !==-1)
    fruits0[index] = "Mango";}
 const fruits0:string[] =["Apple","Banana","Papaya"]
replaceBananaWithMango(fruits0);
console.log(fruits0);

