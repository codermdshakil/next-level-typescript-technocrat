{
    /**
     * 
     * Generic constraints with keyof 
     * 
     * - Constraints ব্যাবহার করে আমরা আগে থেকেই একটি  object এ কি কি property থাকা লাগবেই সেগুলো বলে দিতে পারি । এখন আমরা যদি  একটি object 
     * এর জন্য আগে থেকে name, age, email দিয়ে interface বা type ব্যাবহার করে Person নামে একটি Intereface বানিয়ে রাখি এখন আমি যদি চাই যে Person
     * নামে Object Structure না মিললে object টি সঠিক হিসেবে নিব না বা object টি নিব না তাহলে keyof দিয়ে বলে দিতে পারি যে keyof Person দিয়ে বলে
     * দিতে পারি যে person এর ভিতরে যেই যেই property আছে সেগুলো লাগবে ই!
     *   
     * 
    */


    type Vehical = {
        name:string;
        car:string;
        ship:string;
    }

    type Owner1 = "name"| "car" | "ship"; // manually 

    type Owner2 = keyof Vehical; // dynamically


   

    // Y extends keyof X : এর মানে হল যে Y এর টাইপ এর মধ্যে X object এর property থাকা লাগবে ।

    const getPropertyValue = <X, Y extends keyof X >(obj:X, key:Y) => {
        return obj[key];
    }

    const user = {
        name:'Shakil Ahmed',
        age:20,
        email:'shakil@gmail.com'
    };

    const car = {
        brand:'Mercedes Bez',
        color:'Black',
        price:'1 Cr'
    }

    const res1 = getPropertyValue(user, 'email');
    const res2 = getPropertyValue(car, 'price');
    // console.log(res2);


 
}