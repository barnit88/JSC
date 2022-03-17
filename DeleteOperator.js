/**
 *  #####   Delete Operator in JavaScript   ######
 * 
 * Delete operator in JavaScript provide functionality
 * of deleting the object property from the object 
 * It returns true or false, if the object property is 
 * sucessfully deleted it returns true , otherwise false
 * is returned
 */

//  console.log(objectLiteral.param1);

var objectLiteral = {
    
    param2 : "Param 2",
    param3 : "Param 3",
    param4 : "Param 4",
    
}
console.log(objectLiteral.param1);

objectLiteral.param1 = function() {
    console.log("Example");
}


console.log(objectLiteral);
objectLiteral.param1();

delete objectLiteral.param1;
console.log(objectLiteral);
