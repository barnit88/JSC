/**
 * ### JavaScript ####
 * JavaScript is a synchrnous, Single threaded language
 * 
 * Javascript creates a Execution context when javaScript 
 * engine starts executing the JavaScript.
 * The whole execution is divided into two parts.
 * 
 * Frist part or phase is :- Memory Creation phase which 
 * is also known as Variable Enviroment. The memory component 
 * contains the variable and the function as Key Value pair.
 * 
 * 
 * Second part or Phase is :- Execution phase in which 
 * JavaScript executes each line one by one. This phase 
 * is also known as Thread of Execution.
 */














/**
 * #####    Lexical Enviroment  #####
 */

function LexicalEnviromentFunction(){
    /**
     * This console log will show two behaviour
     * depending on the placement of the 
     * LexicalEnviromentFunction call.
     * 
     * 1>   If the function call is below the variable
     *      then the variable value is printed on the 
     *      console.
     * 2>   If the function call is above the variable
     *      then undefined will be printed on the console      
     */
    console.log(lexicalEnviromentVariable);
}
//1 -> Prints Undefined
LexicalEnviromentFunction();
var lexicalEnviromentVariable = "Example variable Lexical Enviroment";

//2 -> Prints the variable value
LexicalEnviromentFunction();

















/**
 * #####    Scope Chain and Lexical Scope in JavaScript ######
 * 
 * Scope chain is chain of scope. A scope chain contains lexical 
 * Scope. 
 * 
 */
function ScopeChainAndLexicalScope(){
    console.log("Lexical Scope method");
    var ScopeChainVar = "First Scope Chain";
    function ScopeChain1(){
        var ScopeChainVar1 = "Second Scope Chain ";

        console.log("Scope Chain 1 method");
        function ScopeChain2(){
            var ScopeChainVar2 = "third Scope Chain ";

            console.log("Scope Chain 2 method");

            console.log(lexicalScopeExample);
            console.log(ScopeChainVar1);

        }
        ScopeChain2();
    }
    ScopeChain1();
}
var lexicalScopeExample = "Lexical Scope Example";
ScopeChainAndLexicalScope();


















/**
 * #### let And const in JavaScript #####
 * 
 * let and const in javascript in hoisted but it is 
 * block scoped variable. That is it 
 * 
 * 
 *      ## let keywoed  ##
 * 1>   let has hoisting in its own separate memory space enviroment.
 * 2>   
 * 3>   let has a concept called temporal deadjone. A temporal deadjone
 *      is the time period betwwen the memory creation for the let variable
 *      and assigning the value to the let variable. 
 *      The let variable in the temporal deadzone cannot be excecssed.
 * 4>   The let variable are not attached to window object or global object.
 * 5>   let cannot be redeclared as var.
 * 
 * 
 *      ##  const keyword   ##
 *      const behaves same as let 
 * 1>   const cannot be initialized only, it has to assigned some value
 *      during initialization.
 */

let blockScopeVariableUsingLet = "Blocked Scope variable";
const blockScopeVariableUsingConst = "Blocked Scope variable Const";
{
    let blockScopeVariableUsingLet = "I cannot override above variable";
    const blockScopeVariableUsingConst = "Blocked Scope variable Const";

}
console.log(blockScopeVariableUsingLet);

/**
 * This below information will be shown in the Scope in developer tools
 * when we execute the below program.
 * Info :- The program, is in debug mode and the debugger is placed in
 * LINE NO 136 which is blockScopeVariableUsingLet variable inside the 
 * block scope.
 *   
 * 
 *  The two section script and block shows that the let keyword variables 
 *  are hoisted in seperate memory space.
 * 
 *  Block
 *  blockScopeVariableUsingLet: undefined
 *  Script
 *  blockScopeVariableUsingLet: "Blocked Scope variable"
 *  Global 
 */




















/**
 * 
 *      ####    Block in JavaScript    ####
 *      A block is a compound statement. It groups various javascript
 *      code lines into a scope.
 *      
 *      Any code inside two curly braces '{ }' is a code inside block.
 *      '{ }' is a block.
 * 
 */
var shadowVariable = 100;
{
    var shadowVariable = 10;//This variable will shadow the other variable
    console.log(shadowVariable);// output = 10;
}
console.log(shadowVariable);// output = 10;
let shadowVariableLet = 920;
function shadowingVariableUsingFunction(){
    //This variable shadow all above variables
    var shadowVariableLet = 22000;
    var shadowVariable = 2000;
    console.log(shadowVariableLet);// output = 22000;
}

shadowingVariableUsingFunction();
console.log(shadowVariable);// output = 10;
console.log(shadowVariableLet);// output = 920;























/**
 * 
 *      ####     Closures in JavaScript      #####
 * 
 * Closure in simple word is function with its lexical scope
 *
 * CLosure are used in 
 * 1>   Module Design Pattern
 * 2>   Currying
 * 3>   Functions like once
 * 4>   memoize
 * 5>   maintaining state in async world
 * 6>   setTimeouts
 * 7>   Iterators
 * 8>   and many more
 * 
 */

function ClosureExample(){
    var closureVariable = "Closure Variable";
    function Closure1(){
        var closureVariable = "Closure Variable";
        // var closure1Variable = "Closure1 Variable";
        function Closure2(){
            // var closure2Variable = "Closure2 Variable";
            var closureVariable = "Closure Variable";
            function Closure3(){
                // var closure3Variable = "Closure3 Variable";
                var closureVariable = "Closure Variable";
                console.log(closureVariable);
                // console.log(closure1Variable);
                // console.log(closure2Variable);
                // console.log(closure3Variable);
            }
            Closure3();
        }
        Closure2();
    }
    Closure1();
}
ClosureExample();







function Counter(){
    var count =0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}

var c = Counter();
var d = Counter();
c();
c();


/**
 * #### Storage API of Browser  ######
 * 
 */
function SetItemInLocalStorage(){
    localStorage.setItem("value1","This is first value");
    localStorage.setItem("valueToRemoved","This is value to be removed");
    console.log(localStorage.getItem("value1"));
    localStorage.removeItem("valueToRemoved");
}
SetItemInLocalStorage();
















/**
 * #### Prototype And Prototypal Inheritance  #####
 * 
 * 
 * 
 */



let arr = ["barnit","tara"];
var object = {};