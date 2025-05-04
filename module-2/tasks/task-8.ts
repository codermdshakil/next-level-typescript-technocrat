{
    interface User{
        name:string;
        email:string;
    }

    interface Admin{
        adminLevel:string;
    }

    type AdminUser = User & Admin;

    const user1 : AdminUser = {
        name:'Shakil Ahmed',
        email:'ahmedshakil@gmail.com',
        adminLevel:'Manager'
    };

    const describeAdmin = (admin:AdminUser) :string => {
        return `My name is ${admin.name}. My email is ${admin.email}. My role is ${admin.adminLevel}`;
    } 

    const res1 =  describeAdmin(user1);
    console.log(res1);
    
}