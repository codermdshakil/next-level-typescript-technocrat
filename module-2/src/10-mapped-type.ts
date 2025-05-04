{
    /**
     * 
     * Mapped Type
     * 
     * A Mapped Type allows you to create a new type by transforming the properties of an existing type.
     * 
     * 1. mapped type : to converted number -> string, string -> number, anything -> anything
     * 2. Costomized Mapped type 
     * 
     * 
    */

    const numbers:number[] = [3,5,6,7]; // [ 3, 5, 6, 7 ]

    // number -> string
    // using mapped make string type

    const stringArray:string[]= numbers.map((number) => number.toString()); // [ '3', '5', '6', '7' ]

    type AreaNums = {
        height:number;
        widht:number;
    };

    // type AreaString = {
    //     height:string;
    //     width:string;
    // }

    // mapped type : to converted number -> string, string -> number, anything -> anything

    // AreaNums all property string
    // type AreaString = {
    //     // dynamically
    //     [key in keyof AreaNums]: string;
    // };

    // AreaBoolean all property boolean
    // type AreaBoolean = {
    //     [key in keyof AreaNums]:boolean;
    // }


    // Customize mapped type

    // T - {height:string, width:number} 
    // key - T["height"]/ T["width"] 


    type AreaString<T> = {
        [key in keyof T]: T[key];
    };

    const area1 : AreaString<{height:string, width:number}> = {
        height:'100',
        width:50,
    }


 
}