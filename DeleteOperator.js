/**
 *  #####   Delete Operator in JavaScript   ######
 * 
 * Delete operator in JavaScript provide functionality
 * of deleting the object property from the object 
 * It returns true or false, if the object property is 
 * sucessfully deleted it returns true , otherwise false
 * is returned
 */

/**
 * If you are a JavaScript developer you might have seen delete keyword.
 * Delete operator of JavaScript allows us to delete an object property.
 * Delete operator takes the object property and removes the object property from 
 * the object. 
 */
var objectLiteral = {
    
    param2 : "Param 2",
    param3 : "Param 3",
    param4 : "Param 4",
    
}
console.log(objectLiteral.param1);

objectLiteral.param1 = function() {
    console.log("Example");
}
function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var barnit = new Person("Barnit", "Basnet");
console.log(barnit);
// delete barnit.firstName;
delete barnit;
console.log(barnit);


// console.log(delete Person);

// console.log(objectLiteral);
// objectLiteral.param1();

// var isDeleted = delete objectLiteral.param1;
// console.log(isDeleted);
// console.log(objectLiteral);


// var deleteMe = "Delete Me";
// console.log(delete deleteMe);
// function DeleteMeFunction(){

// }
// console.log(delete window.DeleteMeFunction);
// ddd = "Hey Delete";
// console.log(delete ddd);