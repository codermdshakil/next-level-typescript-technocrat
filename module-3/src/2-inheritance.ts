{
    /**
     * Topic: Inheritence
     * 
     * - OOP 
     *  - Inheritence
     *  
     * 
     * 
     * */


    class Person{
        name:string;
        age:number;
        address:string;
        
        constructor(name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(sleepHours:number){
            console.log(`${this.name} will sleep for ${sleepHours}h`);
        }

    }

    // inherit from person
    class Student extends Person{
        
        color:string;

        constructor(name:string, age:number, address:string, color:string){
            super(name,age, address);
            this.color = color;
        }

        getStudy(studyHours:number){
            console.log(`${this.name} study for ${studyHours}`);
        }
    }

    // inherit from person
    class Teacher extends Person{
        designation:string;

        constructor(name:string, age:number, address:string, designation:string){
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numsOfClass : number){
            console.log(`${this.name} sir take class ${numsOfClass}`);
        }
    }

 


    
    const student1 = new Student('Shakil Ahmed', 20, 'Kapasia Gazipur', 'Black');
    // console.log(student1);
    student1.getSleep(7); 
    
     

    const teacher1 = new Teacher('Ali Monsur Sir', 54,'Tagajong', 'Head Teacher');
    // console.log(teacher1);
    // teacher1.getSleep(6);
    // teacher1.takeClass(3);

}