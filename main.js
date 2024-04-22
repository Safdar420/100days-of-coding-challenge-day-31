//  Q no 91
var favouriteFruits = ["Mango", "Banana", "Apple"];
favouriteFruits.push("Grapes", "Papaya");
console.log(favouriteFruits);
//  Q no 92
function removeLastElement(arr) {
    return arr.pop();
}
var fruits = ["Apple", "Mango", "Banana", "Papaya"];
console.log(removeLastElement(fruits));
console.log(fruits);
//  Q no 93
function replaceBananaWithMango(fruits0) {
    var index = fruits0.indexOf("Banana");
    if (index !== -1)
        fruits0[index] = "Mango";
}
var fruits0 = ["Apple", "Banana", "Papaya"];
replaceBananaWithMango(fruits0);
console.log(fruits0);
