{
    /**
     * 
     * Union and Intersection
     * 
     * - union type using -> |
     * - intersection using -> &
     * 
    */


    // union type

    // type frontEndDeveloper = 'fakibazDeveloper' | 'JuniorDeveloper';
    // type fullStackDeveloper = 'FullStackFakibazDeveloper' | 'FullStackDeveloper';

    // const newDeveloper:frontEndDeveloper = 'JuniorDeveloper';

    // type developer = frontEndDeveloper | fullStackDeveloper;


    // type User = {
    //     name:string;
    //     email:string;
    //     gender:"male" | "female";
    //     bloodGroup : "A+"| "AB+" | "O+"| "O-";
    // };

    // const user1 : User = {
    //     name:'Shakil Ahemd',
    //     email:'ahmedshakil0512@gmail.com',
    //     gender:'male',
    //     bloodGroup:'A+'
    // };


    // Intersection

    type frontEndDeveloper = {
        skills:string[],
        desingnation1:'FrontEnd Developer'
    };


    type backEndDeveloper = {
        skills:string[],
        desingnation2:'BackEnd Developer'
    };

    // intersection measn both property must have
    type fullStackDeveloper = frontEndDeveloper & backEndDeveloper;

    const fullStackDB: fullStackDeveloper = {
        skills:['TypeScript', 'Js'],
        desingnation1:'FrontEnd Developer',
        desingnation2:'BackEnd Developer'
    };

    console.log(fullStackDB);




    



}