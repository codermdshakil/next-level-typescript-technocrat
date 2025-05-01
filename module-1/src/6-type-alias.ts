{
    /**
     * Type Alias
     *
     * - type alias for variable
     * - type alias for object
     * - type alias for function 
     * 
     * When use type alias
     * - complex types
     * - utility types like Partial, Pick
     * - aliasing primitive, union, or tuple types
     * 
     * When use Interface
     *
     * - object structure
     * - extends 
     * - working with oop
     * 
     * 
     * */



    // string
    type userName = string;

    const user1 : userName = 'Shakil Ahmed';
    const user2 : userName = 'Noyon Rahman';
    const user3 : userName = 'Nadim Hassan';

    // string + number
    type salaryType =  string | number;

    const user1Salary : salaryType = "20k";
    const user2Salary : salaryType = 10000;
    const user3Salary : salaryType = '15k';


    // type alias for object
    type Student = {
        name:string;
        age:number;
        gender:string;
        contactNo:string;
        address:string; 
    };

    const student1: Student = {
        name:'Shakil Ahmed',
        age:20,
        gender:'Male',
        contactNo:'01729107200',
        address:'Kapasia | Gazipur | Dhaka'
    };

    const student2: Student = {
        name:'Nadim Hassan',
        age:21,
        gender:'Male',
        contactNo:'halar number eer  shes nai ',
        address:'Kapasia | Gazipur | Dhaka'
    };

    const student3: Student = {
        name:'Noyon Rahman',
        age:22,
        gender:'Male',
        contactNo:'017costo lage lekhte',
        address:'Kapasia | Gazipur | Dhaka'
    };

    const allStudents: Student[] = [student1, student2, student3];
    // console.log(allStudents);


    // type alias for function
    // type FunctionName = (parameter1: Type1, parameter2: Type2) => ReturnType;


    type Add = (num1:number, num2?:number) => number;

    // create a function usint function type alias
    const add:Add = (num1, num2 = 20)=> {
        return num1 + num2;
    }

    // use function 
    const res1 = add(10, 20);
    // console.log(res1);


    // alternative

    interface Multiply {
        (n1:number, n2?:number):number
    };

    const multiply : Multiply = (n1, n2=0) => {
        return n1*n2;
    };

    const res2 = multiply(10, 5);
      

    


}