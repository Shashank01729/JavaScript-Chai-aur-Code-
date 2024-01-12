/* 
                                        JavaScript Execution Context


    For running js runs it in two phase

    {} (Code Files or javascript code) -> "Global Execution Context" is made and it it stored in "this" (or referred to "this")

    For browser environment the Global Execution Context is different and for noe js environment it is different, 
    for different environment it is different.

    For browser this value is "Window Object" 

    JavaScript is a single threaded and everything inside is treated as a process

    Second thing we have is "Function Execution Context"

    Third thing we have is "Eval Execution Context"


    1st Phase is Memory Creation Phase (or Memory Phase or Creation Phase)

        In memory creation phase only the variable or the things which sre declared are only allocated memory

    2nd Phase is Execution Phase

        +, -, *, etc happens in execution phase


    CODE:

        let val1=10
        let val2=5
        function addNum(num1, num2){
            let total=num1+num2
            return total
        }
        let result=addNum(val1,val2)
        let result2=addNum(10,2)

    
    STEPS:
        
        1) Global Execution -> this


        (First Cycle)
        2) Memory Creation Phase (MCP) 

            val1 -> undefined
            val2 -> undefined
            addNum -> defination (the whole function code after function addNum goes in it)
            result1 -> undefined
            result2 -> undefined


        (Second Cycle)
        3) Execution Phase

            val1 <- 10
            val1 <- 5
            addNum ->  __________________________
                      |                          |
                      | New variable Environment |
                      |             +            |
                      |    Execution Thread      |
                      |__________________________|

                    Everytime a function is executed, a new box is created for this which is called new executional context
                    Inside this context, a separate enivornment sandbox is created for variables and a execution thread is 
                    also created for all the work and execution and due to this now two work will begin once again MCP and 
                    EP for addNum       


                    for addNum -> MCP:

                                    val1 -> undefined
                                    val2 -> undefined
                                    total -> undefined
                
                                  EP:

                                    num1 <- 10
                                    num2 <- 5
                                    total <- 15 (total will be returned to the parent executional context)
                                    (total now return to global executional context
                                    After the work of this new executional context is done then it is deleted   

            result1 <- 15

            result2 -> __________
                      |          |
                      |   NVE    |
                      |    +     |
                      |  Thread  |
                      |__________|   

                      for addNum same thing will be done
*/


/* 
                                            CALL STACK

                                    |                         | 
                                    |                         |
                                    |                         |
                                    |                         |
                                    |                         |
                                    |                         |
                                    |_________________________|
                                    |                         |
                                    |Global Execution Context |  
                                    |_________________________|       
                                    
                                    
    one() goes inside the satck and when its work is done then it is removed from the stack      
    
    If we have called a function inside a function then how it works?

    Methods: one(), two(), three()

    one() goes inside execute then comes outside
    two() goes inside execute then comes outside
    three() goes inside execute then comes outside

    But complexity is when we called one() and inside it we called two() and then inside it we have called three()

    LIFO concept will work here, Last in First Out

    three() will go outside first then two() then one()
*/


// Go to google
// Inspect
// Sources
// Snippets
// make a file and code


/* 
    function one(){
        console.log("one");
    }

    function two(){
        console.log("two");
    }

    function three(){
        console.log("three");
    }

    one();
    two();
    three();
*/

function one(){
    console.log("one");
    two();
}

function two(){
    console.log("two");
    three();
}

function three(){
    console.log("three");
    
}

one();
two();
three();