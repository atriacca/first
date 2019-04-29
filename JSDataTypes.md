// JS Data Types
    // Primitive - immutable - passed by value
        // String
        // Boolean
        // Number
            // NaN
        // undefined
        // null

    // Complex - mutable - passed by reference
        // Object
        // Array
        // Function - First class
                // Use it just like any other variable

// Pass by reference
    const apples = {
        apple1: "green apple",
        apple2: "red apple"
    }

     const box1 = apples      // This is pointing to the same object as apples, so changing this changed the object above
     const box2 = {...apples} // This is creating a new object with the same contents as the apples object, so they are separate

    box1.apple1 = "yellow apple"
    console.log(apples.apple1) // "yellow apple"
    console.log(box1.apple1)   // "yellow apple"
    console.log(box2.apple1)   // "green apple"


// Pass by value
    let wizard1 = "harry"
    let wizard2 = wizard1

    wizard1 = "Dumbledore"

    console.log(wizard1)
    console.log(wizard2)


// Mutable
    const person = {
        name: "rick",
        age: 70
    }

    person.name = "morty" // changes the name property of 'person' since 'person' is just a box where values can be changed

// Immutable
    let name = "rick"
    name[0] = "m"
    console.log(name) // Returns "rick" because strings are immutable (cannot be altered)
    // you would have to re-assign the variable name to make it equal a new string.  ex: name = "mick"

// Mutable example again with array's this time
    const colors = ["blue", "green", "yellow"]

    colors[0] = "red"
    console.log(colors)
       
    

  

// Types of Functions
    // 2 ways to declare a function
      // Hoisting example for the functions below
        // myFunction() // works as function declarations are hoisted and can be called anywhere
        // myOtherFunction() // does not work as it can only be used after the line number where it was declared

        // 1. Function Declarations - using the 'function' keyword
            function myFunction(){
                console.log("I have been hoisted")
            }
        // 2. Function Expressions - storing a function reference in a variable
            const myOtherFunction = () => {
                console.log("i wont be run")
            }

            // Sub-classes of functions (depends on how and where you call/use a function)
            // Anonymous - A function with no name
                // form.addEventListener("submit", (event) => {  

                // })

            // Callback - A function passed into another function as a parameter
                function alertHi(){
                    console.log("hi")
                }

                function countTo2ThenSayHi(callback){
                    setInterval(callback, 2000)
                }
 
                // countTo2ThenSayHi(alertHi) // countTo2ThenSayHi takes 'alertHi' as a callback to use in it's interval

            // Methods - It's a function that's a property of an Object

                const person = {
                    name: "Rick",
                    speak: () => {   // Method of person
                        console.log(this.name)
                    }
                }

        // typeof operator - returns the JS data type of a given variable/function
            const age = 20
            const myObj = { name: "Steve" }
            const names = ["steve", "rick"]
            function hi(){

            }
            // console.log(typeof NaN)

            // const myStr = "hi"
            // const myOtherStr = new String("This text")
            // console.log(myOtherStr)

            // myStr.split()

            // String.prototype.split = function(){
            //     const arr = []
            //     for(let i = 0; i < this.length; i++){
            //         arr.push(this[i])
            //     }
            //     return arr
            // }
