{
    /**
     * 
     * Generic Interface type
     * 
     * - dynamically create object type
     * - add multiple dynamic properties
     * - generic will default patameter
     * - take multiple parameter as a object any or data in generic
     * 
    */

    // generic interface type
    // generic will default patameter
    interface  Developer<T, X = null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        };
        smartWatch:T,
        bike?:X
    };


    // normal watch type
    interface NormalWatch {
        brand:string;
        model:string;
        display:string
    }


    interface AppleWatch {
        brand:string;
        model:string;
        display:string;
        isHeartTrack:boolean;
        isBloodTrack:boolean;
    }


    // object of type Developer
    const poorDeveloper : Developer<NormalWatch> = {
        name:"Shakil Ahmed",
        computer:{
            brand:'HP',
            model:'HP EliteBook g3',
            releaseYear:2012
        },
        smartWatch:{
            brand:'Casio',
            model:'Casio 2D',
            display:'IPS'
        }
    };


    interface Bike{
        brand:string,
        engineCapacity:string;
    }

     // object of type Developer
    const richDeveloper : Developer<AppleWatch, Bike> = {
        name:"Noyon Rahman",
        computer:{
            brand:'Mac',
            model:'Mac Air Pro',
            releaseYear:2015
        },
        smartWatch:{
            brand:'Apple',
            model:'iWatch',
            display:'OLED',
            isHeartTrack:true,
            isBloodTrack:true
        },
        bike:{
            brand:'Yamaha',
            engineCapacity:'250cc'
        }
    };

 

}