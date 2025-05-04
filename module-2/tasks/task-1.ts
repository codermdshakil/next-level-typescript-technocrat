{
    // Task 1: Basic Data Types and First Program 
    const welcome: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    // console.log(welcome);

    // Task 2: Functions, Optional, and Literal Types

    interface User {
        name:string;
        age:number;
        role:"admin"| "user"| "guest";
    };

    const person1  : User = {
        name:'Shakil Ahmed',
        age:20,
        role: 'admin'
    };

    const printValues = (person: User) => {
        console.log(`My name is ${person.name}. My age is ${person.age} and I am ${person.role}`) ; 
    };

    // printValues(person1);]

    // Task 3: Object Types, Type Alias, & Literal Types

    type Person = {
        name:string;
        address:string;
        age:number;
        hairAndEyeColor:string;
        IncomeAndExpence: string;
        hobbies:string;
        familyMembers: number;
        job:string;
        skills: string[];
        MaritalStatus: boolean;
        friends:string[]
    }



}