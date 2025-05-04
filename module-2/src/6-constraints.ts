{
    /**
     * Topic : Constraints
     * 
     * Contraints :  ব্যাবহার করে আমরা একটি object এর must লাগবেই এমন কিছু টাইপ আগে থেকে বলে দিতে পারি । ওই টাইপ এর ডাটা ছাড়া ডাটা object  এ  না
     * থাকা মানে ওই   object টি সঠিক নয় ।
     * 
     * 
     * */

    const addCourseToStudent = <T extends {id:number, name:string, age:number} >(student:T) => {
        const level : string = "Next level web development";
        return {
            ...student,
            level
        }
    };

    interface UserType3{
        id:number,
        name:string;
        age:number;
        email:string;
    }

    const student1 : UserType3 = {
        id:111,
        name:"Shakil Ahmed",
        age:21,
        email:'ahmedshakil@gmail.com'
    };

    const student2 : UserType3 = {
        id:222,
        name:"Noyon Rahmna",
        age:22,
        email:'noyon@gmail.com'
    };

    const student3 : UserType3 = {
        id:333,
        name:"Nadim Hassan",
        age:21,
        email:'nadim@gmail.com'
    };
    
}