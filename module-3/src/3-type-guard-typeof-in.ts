{
    /**
     * 
     * Topic: Type Guard using typeof and in
     * 
     * - typeof
     * - in
     * 
     * */


    // typeof -> type guard

    type AlphaNumeric = string| number;

    const add = (param1: AlphaNumeric, param2:AlphaNumeric):AlphaNumeric => {
        if(typeof param1 ==='number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(4,8); // 12
    const result2 = add('5', 7); // 57

    // in guard

    type NormalUser = {
        name:string;
    }

    type AdminUser = {
        name:string;
        role:'Admin';
    };

    const getUser = (user: NormalUser | AdminUser ) => {
        
        // in guard
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}.`);
        }
    }

    const normalUser: NormalUser = {
        name:'Shakil Ahmed',
    }

    const adminUser : AdminUser = {
        name:"Admin User",
        role:'Admin',
    }
    // getUser(normalUser);
    // getUser(adminUser);
    



    
    
}