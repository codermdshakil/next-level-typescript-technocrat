{
    const reverseString = (value:string): string => {
        const result = value.split("").reverse().join("");
        return result;
    };
    const result =  reverseString("HELLO");
    console.log(result);
}