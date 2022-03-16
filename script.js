/**
 *############### Object Oriented Programming in JavaScript ###############
 * 
 */

/**
 * ######## Creating an object Class using javaScript ################
 *  
 * Example is given below 
 */
function Employee(firstName, lastName){
    this.firstName = firstName; //Public function 
    this.lastName = lastName;
    console.log("Object employee secetion ");
    Department();

    this.getFullName = function(){
        return this.firstName + " " + lastName;
    }
}


/**
 * ########## Creating an object using object literal ###############
 * 
 * Example is given below 
 */
var employeeObject = {
    firstName : "Barnit",
    lastName : "Basnet",
    getFullName : function(){
        return this.firstName + this.lastName;
    }
}



/**
 * ### Difference between using objectLiteral and fucntion to create object #############
 * in JavaScript
 * 
 * Object created using object literal is singelton, i.e only one instance is 
 * shared over all the application.
 * 
 * Object created using function is not singelton. That is mulitple instance of the 
 * object can be created. 
 */


















/**
 * ### Private,Public Member in JavaScript #####
 */
function PrivateAndPublicMember(){
    //If the funciton is not used as constructor function
    //then the publicMember will be the member of the global object
    //as the this keyword will refer to the global object || window object
    
    /**
     * Public members
     */
    //public field
    this.publicMember = "Hy I am public memeber";
    /**
     * Public Function
     * 
     * Public function cannot call private method
     * Public function can only call priveleged method
     * Main benefit of public function is that only one definition 
     * is shared among all the instance. All instance uses same definition.
     * As preiveleged function instance is created for each object instance.
     */
    PrivateAndPublicMember.prototype.publicFunction = function(){
        console.log("Public function")
    }
    /**
     * Private Member
     */
    //Private Field
    var privateVariable = "I am private property";
    var privateMethod = function(){
        console.log("I am private method");
    }
    function privateMethod1(){
        console.log("Another way of creating private function");
    }
    /**
     * Priveleged Function
     * 
     * Priveleged method can call private method or access private fields
     * It is similar to public function
     */
    this.publicMethod = function(){
        console.log("I am public method");
    }
}
















/**
 * ##### Properties in JavaScript #######
 * 
 * Getter and Setter in JavaScript
 * Object.defineProperty in JavaScript
 */
function ObjectPropertyInJavaScript(){
    //Private Fields
    var firstName;
    var lastName;
    //Assigning getter and setter properties for the private fields
    //To make the property read only property we can remove the set function
    Object.defineProperty(this,"firstName",{
        get:function(){
            return firstName;
        },
        set:function(value){
            firstName = value;
        }
    });
    Object.defineProperty(this,"lastName",{
        get:function(){
            return lastName;
        },
        set:function(value){
            lastName = value;
        }
    });
    Object.defineProperty(this,"fullName",{
        get:function(){
            return firstName + " " + lastName;
        }
    });
}
















/**
 * ##### Object.defineProperties in JavaScript #######
 */
 function ObjectPropertiesInJavaScript(){
    //Private Fields
    var firstName;
    var lastName;
    //Assigning getter and setter properties for the private fields
    //To make the property read only property we can remove the set function
    Object.defineProperties(this,{
        firstName:{
            value:120,
      
            writable:true
        },
        lastName:{
            get:function(){
                return lastName;
            },
            set:function(value){
                lastName = value;
            },
        }
    });
}
















/**
 * ##### Static Field in JavaScript #######
 * 
 * Way to create static fields in JavaScript
 */
 function StaticFieldInJavaScript(){
    //Private Fields
    var firstName;
    var lastName;
    //Static Field
    //This value will be shared with all the instances
    StaticFieldInJavaScript.PI = 3.14;
    StaticFieldInJavaScript.StaticMethod =function(){
        console.log("Static method");
    };
}















/**
 *  ####### Object.prototype in JavaScript (prototype) #########
 * 
 * 
 */

function PrototypeObject(argument){
    var parameter = argument;
    PrototypeObject.prototype.Method1 = function(){
        console.log("I am Method1");
    }
}

PrototypeObject.prototype.Method2 = function(){
    console.log("I am new Method2");
}















/**
 * ###### Overriding JavaScript Functions ########
 * 
 * 
 */
function OveridingFunctionInJavaScript(){
    this.publicMember = "OverridingFunctionInJavaScript member";
    OveridingFunctionInJavaScript.prototype.MethodToBeOverride = function(){
        return this.publicMember;
    }
}
//To override a function
var overridingFunctionVariable = new OveridingFunctionInJavaScript();
OveridingFunctionInJavaScript.prototype.MethodToBeOverride = function(){
    return this.publicMember.toUpperCase();
}
//This will  return the new implementation  of function
overridingFunctionVariable.MethodToBeOverride();















/**
 * ###### Inheritance in JavaScript #######
 * 
 * 
 */
function ParentClass(name){
    this.name = name;
    this.getName = function(){
        return this.name;
    }
    ParentClass.prototype.getNameUsingPrototype = function(){
        return this.name;
    }
}
function ParentClass1(name){
    this.name1 = name;
    this.getName1 = function(){
        return this.name;
    }
    // ParentClass.prototype.getNameUsingPrototype = function(){
    //     return this.name;
    // }
}
function ChildClass(salary){
    this.salary = salary;
}
var employee = new ParentClass("Barnit");
var employee1 = new ParentClass1("Barnit");

/**
 * Multiple inheritance is not allowed. It is overrided by last 
 * prototype assignment.
 * To inherit from multiple object, we need to copy the object properties
 * into another object.
 */ 
ChildClass.prototype = employee;
ChildClass.prototype = employee1;















/**
 * ### Static Member in JavaScript #####
 */
var AbstractMemberExample =  function(){
    this.example = "this is a static class";
    var testVar = "Static Class Variable"
    throw new Error("Static object cannot be instantiated");
}
//Adding memebr and methods

AbstractMemberExample.prototype.example1 = "Example1";
AbstractMemberExample.prototype.methodExample = function() {

};

function InheritAbstractClass(){
    //Nothing in here
}
InheritAbstractClass.prototype = Object.create(AbstractMemberExample.prototype);
















/**
 * ##### Polymorphism in JavaScript #######
 * 
 * Polymorphism is a way of assgining different implementation 
 * to same method.
 * Example :-> example of polymorphism is overiding base methods in child
 * classes
 */
var BaseClass = function(){
    this.baseClassMethod = function(){
        console.log("I am base class");
    }
}
var baseClass = new BaseClass();
var DerivedC  = function(){
    this.baseClassMethod = function(){
        console.log("I am Derived Class");
    }
};

DerivedC.prototype = baseClass;
var derivedClass = new DerivedC();
derivedClass.baseClassMethod();


















/**
 * ################# Global Namespace pollution in JavaScript ################
 * 
 * => When we have included more then one JavaScript file in our HTML
 * document. If we have multiple function or variable with the same name then
 * one funciton or variable is overrided by the other function or varible.
 * The JavaScript file which is included in the last will override the 
 * all above methods or variables. This unwanted overriding of the 
 * variable and function in JavaScript is known as Global Namespace pollution.
 */




/**
 * ########### Namespace in JavaScript ############ 
 * 
 * Why NameSpace are needed in JavaScript ?
 * => NameSpace plays vital role if we are implementing JS from 
 * more than one files. When we are implementing JS from more then 
 * one file the global namespace might be polutted, i.e there might
 *  be more than one variable or function declaration with same 
 * name then the one version of the variable and function overrides 
 * the other version of it. The jaavscript which is referenced in
 * the last will override all other in above.Thus namespace will \
 * prevent this type of unwanted pollution (Global namespace polution).
 * 
 * $$ -> To explain this example we wil be using two JavaScript files
 * TeamA and TeamB 
 * 
 */
/**
 * To create a NameSpace we give a Namespace name to a variable
 * And check if the variable is assigned in other files or not .
 * Also check if the given namespace variable is of value type or
 * string, if it is of value type or sting in other file we replace it
 * with empty object notation
 * And we assign function and varriable as key to the function.
 */

var BBSolution = BBSolution ?
    typeof(BBSolution) == "object" ? BBSolution: {} : {};

BBSolution.TeamA = BBSolution.TeamA || {};

BBSolution.TeamA.Customer = function(Name, Address, Country){
    this.name = Name;
    this.Address = Address;
    this.Country = Country;
    this.Detail = function(){
        return this.name + " " + this.Address + " " + this.Detail;
    }
    console.log(this);
    return this;
}  

window.BBSolution.TeamA.Customer();


 
/**
 *  ########this keyword in javaScript ############
 * 
 * this keyword refers to the object
 * 1> In a object constructor method, this refers to the object
 * 2> In a function this keyword refers to the global object
 * 3> In a function, in strict mode this refers as undefined
 * 4> this keyword alone refers to the global object
 * 5> In an event this refers to the element that received the event
 * 6> call(), bind() and apply() can refer this to any object. 
 */


var thisAsObject = {
    name : 'this will refer to thisAsObject',
    consoleThis :  function() {
        //this keyword wil refer to this object as object
        console.log(this);
    },
    labdaFunction : () => {
        //Here this keyword will refer to the global object
        console.log(this);
    }
}

function thisInFunction(){
    //All the this keyword will refer to the global object
    //window object
    console.log(this);
    function thisInsideFunction(){
        function thisInsideOfFunction(){
            console.log(this);
        }
        thisInsideOfFunction();
    }
    thisInsideFunction();
}

function ConstructorFunction(constructorArgument){
    this.constructorArgument = constructorArgument;
    console.log(this)
}
/**
 * If the function is used as the constructor function then the 
 * this keyword will refer the current function as object
 * When we use function as a constructor a new object is created first
 * and thats why the this keyword refers to that object;
 */
var constructorFunction = new ConstructorFunction("Constructor Parameter Passed");

//If the function is called this way, this keyword will refer to the gloabl object
ConstructorFunction("Passing parameter");

const functionAssignedToVar = () => {
    //lambda function will always refer this as global object
    console.log(this);
}

var x = Object.create(AbstractMemberExample.prototype);
document.write(JSON.stringify(x));
console.log(x);

var xy = function(){
    console.log("Am I Called");
    console.log(this);
    
}
var xx =Object.create(xy.prototype);
console.log(xx);