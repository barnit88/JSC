/**
 *  #####   Delete Operator in JavaScript   ######
 * 
 * delete in JavaScript is an operator that can delete a property of an JavaScript object.
 * 
 * JavaScript delete operator returns true if it removes an object property and false if it cannot be removed.
 * However the JavaScript delete operator also return true if the property does not exist on  the object.
 * Let us quickly demonstrate with an example.
 */


/**
 * Syntax
 * 
 * delete object.property;
 * delete object["property"]
 * 
 */
 
 
//Object Created With Object Literal Notation
 let Person = {
     firstName : "John",
     lastName : "Doe",
     city : "New York",
     address : "USA, New York"
 } 
 
 console.log(delete Person.city); //true
 console.log(delete Person.age); //true
 

 //Constructor Function
function Car(brand,color){
    this.brand = brand;
    this.color = color;
}

var Creta = new Car("Hyundai", "2021");

console.log(delete Creta.color); //true
console.log(delete Creta.age); //true


/**
 * Delete Keyword can also be used to delete an array element as JavaScript array are after all objects.
 * But deleting array element using delete keyword is highly discouraged as delete keyword does not update the
 * array length and it places an special placeholder in the deleted array index as empty.
 */
// 
 
var numbers = [1,2,3,4];
console.log(numbers); //[1,2,3,4]
console.log(delete numbers[0]); //true
console.log(numbers); //[empty,2,3,4]

