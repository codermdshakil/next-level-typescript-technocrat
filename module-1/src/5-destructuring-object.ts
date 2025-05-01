{
    /**
     * Destructuring -
     * 
     * - array
     * - object
     * - rest operator
     * 
    */

    interface User{
        name:string;
        age:number;
        hired:boolean;
        isMarried:boolean;
        salary:number;
        currentProfession:string;
    };

    const firstUser : User = {
        name:'Shakil AHmed',
        age:20,
        hired:false,
        isMarried:false,
        salary:15000,
        currentProfession:'Finance Manager & Tuitor'
    };


    // object destructuring
    // - don't matter order
    // - ...others rest operator

    const {age, name, currentProfession, salary , ...others} = firstUser;


    // array destructuring 
    // - order matter
    // -  ...normalFrined -> rest operator

    const friends:string[] = ['Noyon', 'Nadim', 'Asraf', 'Mahfuj'];

    const [bestFriend1, bestFriend2, ...normalFrined] = friends;

    // console.log(bestFriend1, bestFriend2);
    // console.log(normalFrined);



}