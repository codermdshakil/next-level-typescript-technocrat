{

    const sumOfAll = (...values:number[]) : number => {
        let sum = 0;
        for(const num of values){
            sum += num;
        }
        return sum;
    }
    
    const sum = sumOfAll(1,2,3,4,5,6);
    console.log(sum);

}