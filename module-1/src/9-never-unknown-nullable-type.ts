{
    /**
     * Never Unknown Nullable-type 
     *
     * Any VS unknown
     * 
     * any = 🔓 Open box — you can do anything with it, even dangerous things.
     * unknown = 🔒 Locked box — you must open it carefully (check the type first).
     * 
     * Never type use :L when we 100% sure that it does not return something so here we can use never type
     * 
    */

    // nullable types
    const searchName = (value:string | null) => {
        if(typeof value === 'string'){
            console.log('Searching...');
        }
        else{
            console.log('there is nothing to search');
        }
    }

    // searchName(null);

    // unknown type
    // - unknonw value must check first then use
    const getSpeedInMeterPerSec = (value:unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The converted speed is ${convertedSpeed} m/s`);
            return convertedSpeed;
        }
        else if(typeof value === 'string'){
            const speed =parseFloat(value.split(' ')[0]) ;
            const convertedSpeed = (speed * 1000) / 3600;
            console.log(`The converted speed is ${convertedSpeed} m/s`);
            return convertedSpeed;
        }
        else{
            console.log('Inter number input');
        }
    };
    
    // const res1 = getSpeedInMeterPerSec('1000 kmh^-1');
    // console.log(res1);


    // never type

    const throwNewError = (msg:string):never => {
        throw Error(msg);
    };

    // throwNewError("new Error occurs using never!")



    



}