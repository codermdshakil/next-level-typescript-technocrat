{
    /**
     * Funtion
     * 
     * - normal function
     * - arrow function
     * - parameter defailt value
     * - object method -> object function must be a normal function
     * - array map
     * 
     * */ 


    // normal function
    function add(num1:number, num2:number = 10):number{
        return num1 + num2;
    }

    const r1 = add(10); // 30

    // arrow function 
    const add2 = (num1:number, num2:number):number => num1 + num2;


    // object method

    interface User{
        name:string;
        age:number;
        job:boolean;
        think:string;
        // method type
        getAge():number;
        getName():string
    }

    const user1 : User = {
        name:'Shakil Ahmed',
        age:20,
        job:false,
        think:'Positive',

        // method to get age 
        getAge() {
            return this.age;
        },
        getName() {
            return `My name is ${this.name}`;
        },
 
    }

    // console.log(user1);
    // console.log(user1.getAge());
    // console.log(user1.getName());

    const arr:number[] = [1,3,7];
    const newArr:number[] = arr.map((elem:number):number => elem * elem);

    // console.log(newArr);




}