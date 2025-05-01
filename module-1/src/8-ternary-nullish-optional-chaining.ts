{
    /**
     * 
     * Topics: Ternary, Optional chaining, Nullish coalescing Operators
     * 
     * - ternamry            -> (age >=18 ? 'true':'false')
     * - optional chaining   -> (?.)
     * - nullish coalsecing  -> (?? "True") use for null and undefine values
     * 
     * 
     * */

    const age:number = 18;

    // if(age>=18){
    //     console.log('Adult');
    // }
    // else{
    //     console.log('Not Adult');
    // }

    // shortcut way:
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // {age >= 18 ? console.log('Adult'):console.log('Not Adult')}


    // nullish coalecing operator
    // - just use when woking with - null, undefine

    const isAuthenticated = "";

    const result1 = isAuthenticated ?? "Guest"; // just worked when value is null or undifine
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    // console.log({result1}, {result2});

    type User ={
        name:string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string; // optional properties
        }
    };

    const user : User = {
        name:'Shakil Ahmed',
        address:{
            city:'Dhaka',
            road:'Gazipur',
            presentAddress:'Gazipur Town',
           
        }
    };

    // const permanentAddress = user?.address?.permanentAddress? user?.address?.permanentAddress: "Permanent Address not Available!!";
    
    // more shortcut
    const permanentAddress = user?.address?.permanentAddress?? "Permanent Address not Available!!";
    console.log({permanentAddress}); 




}