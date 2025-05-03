{
  /**
   * Topic: Type Assertion / Type Narowing
   *
   * Type Assertion - আমি ডেভেলপার হিসেবে TS থেকে বেশি ভালো type  বুজলে  সেইটাকে  ই Type Assertion বলে ।
   * 
   * - using as
   * 
   * Type Narrowing : 	TypeScript infers type via checks (typeof)
   * - using typeof 
   * 
   */

  //   type assertion

  let anything: any;

  anything = "Next Level Web Development";
  (anything as string); // type assertion in string

  anything = 23;
  (anything as number); // type assertion in number


  // type narrowing
  const KgToMn = (value:any):string | number | undefined => {
    if(typeof value === 'string'){
      const convertedValue = parseFloat(value)* 1000;
      return `The converted value is : ${convertedValue}`;

    }
    else if(typeof value === 'number'){
      const convertedValue =  value * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    else{
      console.log('Enter valid number.');
    }
  }

  const result1 = KgToMn(100) as number;
  const result2 = KgToMn("100") as string;
  // console.log(result1);
  // console.log(result2);


  type CustomError = {
    msg:string;
  }

  try{

  }
  catch(err){
    console.log((err as CustomError).msg); // type assertion
  }


}
