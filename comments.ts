/*

    Loosely typed languages / dynamically typed -> JS 
    1. the variables types are assigned at the run-time (dynamic typing system) , can make errors because if changes its type the same given method / property may not exist on it and does cause run-time error. (Causes run-time errors)

    2. Since the loselly type languages allow type changing ( number variable can be assign with string value it my cause error at the run-time )

    Strongly typed / Static-typed languages
    Type-script (strongly typed language ) is introduced to enforce types to the JS ( typescript is based on the JS but with types).

    "type-script" catches compile time errors earlier hence make the code less buggy because a variable will always have the same type throughout the code.
    "type-script" is strongly typed hence does not allow changing the types of the variable.

    At the end the typescript code is converted into JS (without any types) if there is not types error inside the JS code.


    THE WHOLE CONCEPT OF TYPESCRIPT IS TO INTRODUCE "TYPES" to the JAVASCRIPT ( type-script is new language but build on the syntax of JS with types system and the ts compiler / interpreter converts that code into JS )


    Features of type-script
    1. Static-checking -> when declaring variables the developer has to define the type of the variable and if there is any error related to types it will provide its context. this is not possible in JS
    2. Compile-time-errors -> the TS code is converted into JS so that the if there is any error the process of conversion will not execute
    3. interface and types introduction to define structure of object + other things


    Type-script as a languages does not run in browsers or nodeJS, rather it converted into native JS without any types, The types (typescript) are introduced for making JS a strict language ( does find static errors at the compile time ) 


    AT THE END TYPESCRIPT HAS ALL THE FEATURES OF JAVASCRIPT + TYPES INTRODUCTION SO THAT TYPESCRIPT BECOMES STATICALLY TYPED LANGUAGE ( which ensures developer to write clean and error free code ( types errors are introduced at the compile time from TS TO JS) )


    "tsConfig.json" file has many options that are followed when the TS code is converted into JS code

    When using TS we have to explicity define types ( data-types / structure ) so that static checking can be happen by the Typescript


    Basic types introduced by the TS are 1. number ( the variable should be assigned with numeric value ), 2. string, 3. boolean ( variable should be assigned with true or false ), 4. undefined ( represent a variable declared but does not assigned value  ) , 5. null ( represents absence of value )
    (other complex types are build on the top of basis types)
*/