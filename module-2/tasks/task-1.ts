{
    // Task 1: Basic Data Types and First Program 
    const welcome: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    // console.log(welcome);

    // Task 2: Functions, Optional, and Literal Types

    interface Person {
        name:string;
        age:number;
        role:"admin"| "user"| "guest";
    };

    const person1  : Person = {
        name:'Shakil Ahmed',
        age:20,
        role: 'admin'
    };
    
    const printValues = (person: Person) => {
        console.log(`My name is ${person.name}. My age is ${person.age} and I am ${person.role}`) ; 
    };

    // printValues(person1);


}