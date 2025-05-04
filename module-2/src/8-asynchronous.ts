{
    /**
     * Topic : Asynchonous type script
     * 
     * 
     * ✅ Synchronous (সিনক্রোনাস):
     * 
     * - একটি কাজ শেষ না হলে পরের কাজ শুরু হয় না।
     * - সব কাজ এক লাইনে, একটার পর একটা।
     * 
     * ✅ Asynchronous (অ্যাসিনক্রোনাস):
     * 
     * - কোনো কাজ চলতে থাকলেও, তুমি অন্য কাজ করে ফেলো।
     * - সময় লাগবে এমন কাজগুলোকে পেছনে পাঠিয়ে দেওয়া হয়, বাকি কাজগুলো চলতে থাকে।
     * 
     * - Promise
     * - Async/ await
     * - load data from online
     * 
     * 
    */

    // ✅ Synchronous (সিনক্রোনাস): 

    // - maintain order  one by one
    // console.log("1. খাবার অর্ডার দিলাম");
    // console.log("2. রান্না শেষ, খাবার আসলো");
    // console.log("3. আমি খাচ্ছি");

    // ✅ Asynchronous (অ্যাসিনক্রোনাস)

    // console.log("1. খাবার অর্ডার দিলাম");

    // setTimeout(() => {
    //     console.log("2. রান্না শেষ, খাবার আসলো"); // এটা একটু পরে আসে
    // }, 2000);

    // console.log("3. আমি গান শুনছি");

    // output
    // 1. খাবার অর্ডার দিলাম 
    // 3. আমি গান শুনছি
    // 2. রান্না শেষ, খাবার আসলো


    type Something = {
        something:string;
    }

    // simulate
    const createPromise = () : Promise<Something > => {

        return  new Promise<Something>((resolve, reject) => {

            const data : Something = {something:'Something...'};

            if(data){
                resolve(data);
            }
            else{
                reject("Failed to load data");
            }
        })
    };


    // calling promise  
    const loadData = async () : Promise<Something>  => {

        const data : Something  = await createPromise();
        console.log(data);
        return data;
         
    }

    // called loadData
    // loadData();



    // load data from online API

    type Todo = {
        id:number;
        userId:number;
        title:string;
        completed:boolean;
    };


    const getUsers = async () : Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const users = await res.json();
        console.log(users);
        return users;
    };
    getUsers();








 
}