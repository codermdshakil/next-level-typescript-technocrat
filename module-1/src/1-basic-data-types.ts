{
    /**
     *  Basic data types
     * 
     * Primitive Data types
     * - number
     * - string
     * - boolean
     * - undefine
     * - null
     * 
     * 
     * Non Primitive Data types
     * - array
     * - object
     * - tuple : Fixed length, Order maintained, different element different data type
     * 
     * */

    // string
    let firstName:string = "Shakil Ahmed";
    
    // number
    let rollNo :number = 1;

    // boolean
    let isAdmin:boolean = false;

    // undefine

    let x:undefined = undefined;

    // Null
    let y:null = null;


    // undefined vs null 

    // undefined → “I forgot to put something in the box.”
    // null → “I intentionally left the box empty.”

    // any - typescript type chech of
    // - not recomemded to use  
    let person:any;
    // person = "Shakil "
    // person = 34;
    // person = false;


    // array

    // array with just string values
    const friends: string[] = ['Shakil', 'Noyon', 'Nadim'];
    
    // array with just number values
    const salarys: number[] = [10000, 20000, 15000];


    // array with mix data types value
    const mixedTypes:(number | string | boolean | object) = ['shakil', 20, false,{name:'Noyon', age:22, job:true}];

    // tuple --> array 
    // - order maintain
    // - fixed length
    // - for each element data type must

    const tupleEx: [string, number, boolean] = ['Shakil', 20, false]



}
