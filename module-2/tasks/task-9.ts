{

    interface Employee{
        name:string;
        age:number;
        email:string;
        salary:number;
        address:{
            city?:string;
            road:string;
            permanentAddress?:{
                cityAndRoad:string;
            }
        }
    };

    const employee : Employee = {
        name:'Shakil Ahmed',
        age:20,
        email:'ahmeshakil0512@gmail.com',
        salary:20000,
        address:{
            // city:"Gazipur",
            road:'Kapasia',
            permanentAddress:{
                cityAndRoad:'Gazipur, Kapasia'
            }
        }

    };

    const getEmployeeCity = employee?.address?.city? employee?.address?.city:"Not Available";
    console.log(getEmployeeCity); 
 



}