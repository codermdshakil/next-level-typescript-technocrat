{
    /**
     * 
     * Object Optional Properties Literal type
     *
     * - interface
     * - object create
     * - optional property
     * - literal type 
     *
    */

    interface User{
        firstName:string;
        middleName:string;
        lastName?:string; // optional type
        age:number;
        readonly company:"Programming Hero" | "PH"; // Litarel type
        isMarried?:boolean;
    }

    const user : User = {
        firstName:'Mr.',
        middleName:'Shakil',
        lastName:'Ahmed',
        age:20,
        company:'Programming Hero', 
    }





}