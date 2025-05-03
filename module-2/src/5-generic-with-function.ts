{
    /**
     * Topic: Function with generic
     * 
     * Generic Benifits
     * 
     * - Reusability
     * - Flexible
     * - Typy safety
     * 
     * 
     * - normal function
     * - create array using generic with one single object
     * - create array of object using generic with multiple object's
     * - create array with tuple using generic
     * - add course with student usng generic
     * 
    */

    // formal function
    // const createArray = (param:string): string[] => {
    //     return [param];
    // }

    // function with generic
    // const createArrayWithGeneric = <T>(param:T): T[] => {
    //     return [param]
    // }

    // function with generic
    // const createArrayWithGenericWithRestOperator = <T>(...param:T[]): T[] => {
    //     return [...param]
    // }

    // const res2 = createArrayWithGeneric<string>('Bangladesh'); // ['Bangladesh]
    // const res3 = createArrayWithGenericWithRestOperator<number>(1,4,5,6);
    // console.log(res3);

    // create array of object with single object

    // interface UserType {name:string;age:number;email:string};

    // const res4 = createArrayWithGeneric<UserType>({name:'Shakil Ahmed', age:20, email:"ahmedshakil@gmail.com"});

    // create array of object with multiple object
    // const res5 = createArrayWithGenericWithRestOperator<{name:string;age:number;email:string}>({name:'Shakil Ahmed', age:20, email:"ahmedshakil@gmail.com"}, {name:'Noyon Rahman', age:21, email:"noyon@gmail.com"}, {name:'Nadim Hassan', age:22, email:"nadimhassan@gmail.com"});

    // using generic create tuple
    const createArrayWithTuple = <T,Q>(param1:T, param2:Q): [T, Q] => {
        return [param1, param2]
    }

    // const res6 = createArrayWithTuple<number, string>(21, 'Shakil Ahmed'); // [ 21, 'Shakil Ahmed' ]
    interface  UserType1  {
        name:string;
        age:number;
        address:{
            city:string; 
            road:string;
        };
    };

    const user2 : UserType1 = {
        name:"Shakil Ahmed",
        age:21,
        address:{
        city:'Gazipur',
        road:'Kapasia'
        }
    }

    const friends : string[] = ['Noyon', 'Nadim'];
    const res7 = createArrayWithTuple<UserType1, string[]>(user2, friends);

    // console.log(res7);

    const addCourseToStudent = <T>(student:T) => {
        const level : string = "Next level web development";
        return {
            ...student,
            level
        }
    };

    interface UserType3{
        name:string;
        age:number;
        email:string;
    }

    const student1 : UserType3 = {
        name:"Shakil Ahmed",
        age:21,
        email:'ahmedshakil@gmail.com'
    };

    const student2 : UserType3 = {
        name:"Noyon Rahmna",
        age:22,
        email:'noyon@gmail.com'
    };

    const student3 : UserType3 = {
        name:"Nadim Hassan",
        age:21,
        email:'nadim@gmail.com'
    };

    const std1 = addCourseToStudent<UserType3>(student1);
    const std2 = addCourseToStudent<UserType3>(student2);
    const std3 = addCourseToStudent<UserType3>(student3);


}