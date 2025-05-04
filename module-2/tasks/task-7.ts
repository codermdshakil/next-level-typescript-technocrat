{
    const typeAssertion = (value:number | string) => {
        if( typeof value === 'string' ){
            console.log(value.length)
        }
        else if(typeof value === 'number'){
            console.log(value*value);
        }
    }

    // called function
    typeAssertion("Shakil"); // 6 
    typeAssertion(5); // 25

}