{
    /**
     * 
     * Topic: Generic
     * 
     * - Generic means - generalise types
     * - Dynamic ভাবে আমাদের প্রয়োজন আনুসারে যেকোনো type তৈরি করতে পারি এবং ব্যাবহার করেতে পারি !
     * 
     * - generic using array
     * - generic using object
     * - generic using tuple
     * 
     * */ 

    type GenericArray<T> = Array<T>;

    // const numsArray : number[] = [2,5,7,8];
    // const numsArray2 : Array<number> = [2,5,7,8];
    
    // use generic
    const numsArray3 : GenericArray<number> = [2,5,7,8];

    // const stringArray : string[] = ['Shakil', 'Noyon', 'Nadim', 'Asraf'];
    // const stringArray2: Array<string> = ['Shakil', 'Noyon', 'Nadim', 'Asraf'];
    
    // use generic
    const stringArray3:GenericArray<string> = ['Shakil', 'Noyon', 'Nadim', 'Asraf'];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray2 : Array<boolean> = [true, false, true]; 
    
    // use generic
    const boolArray3 : GenericArray<boolean> = [true, false, true]; 




    // array of object using generic

    const users : GenericArray<{
        name:string;
        age:number;
    }> = [
        {
            name:'Shakil Ahemd',
            age:21,
        },        
        {
            name:'Noyon Rahman',
            // age:'22' //error
            age:22 

        },

    ];


    // generic tuple
    type GenericTuple<X,Y,Z> = [X, Y, Z];

    const manus: GenericTuple<string, number, string> = ['Shakil Ahmed', 21, 'ahmedshakil@gmail.com'];

    const userWithId : GenericTuple<number, {name:string; age:number; email:string}, boolean> = [124, {name:'Shakil Ahmed', age:21, email:'shakil@gmail.com'}, false];
    console.log(userWithId);



   


}