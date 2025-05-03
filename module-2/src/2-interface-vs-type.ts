{
    /**
     * Topic: interface, interface vs type
     * 
     * type
     * - add properties using &
     * - primitive data type
     * - function
     * - array
     * 
     * 
     * interface
     * - add properties using extends
     * - non-primitive data types
     * - object 
     * - working with OOP
     *
     * 
     * we can also make type to interface
     * 
     * 
     * 
    */

    // using type

    type User1 = {
        name:string;
        age:number;
        email:string;
    }


    // number type array
    type rollNumbers1 = number[];

    // Using type: extends with rule properties with existing user1 using type
    type UserWithRole1 = User1 & {role:string};

    const user1 : UserWithRole1 = {
        name:'Shakil Ahmed',
        age:21,
        email:'ahmedshakil0512@gmail.com',
        role:'Software Enginner' // extra property added
    };

     // using interface
     interface User2 {
        name:string;
        age:number;
        email:string;
    }


    // Using interface
    interface UserWithRole2 extends User2 {role:string;isAdult:boolean};

    const user2 : UserWithRole2 = {
        name:'Shakil Ahmed',
        age:21,
        email:'ahmedshakil0512@gmail.com',
        role:'Software Enginner', // extra property added
        isAdult:true // extra property added 
    };
    
    // console.log(user2);


    // Declare array using type and interface
    // js -> object, array -> object, function -> object

    // type - best 
    type Rolls1 = number[];

    // interface
    interface Rolls2 {
        [index:number]: number
    }

    const rollNumers: Rolls2 = [1,3,5,6];
    // console.log(rollNumers);


    // Declare function 

    // type 
    type Add1 = (num1:number, num2:number) => number;


    // interface

    interface Add2{
        // function parameter     : return type
        (num1:number, num2:number):number
    }
    
    // create function
    const add : Add2 = (num1, num2) => {
        return num1 + num2;
    };

    const result3 = add(10, 50);
    console.log(result3);





}