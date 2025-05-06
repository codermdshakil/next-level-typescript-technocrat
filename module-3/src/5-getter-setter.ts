{
    /**
     * Topic: Getter and Setter
     * 
     * কাজ করবে Function এর মতো করে কিন্ত ব্যাবহার করতে পারব property এর মতো করে ।
     * 
     * - get - getter - to get value
     * - set - setter - to set value take one parameter
     * 
     * 
     * */

    class BankAccount {

        private id:number;
        name:string;
        private _balance:number;

        constructor(id:number, name:string, _balance:number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        get Balance(){
            return this._balance;
        }

        set AddAmount(amount:number){
            this._balance = this._balance + amount;
            console.log(`Successfully added ${amount}. Total balance is ${this._balance}`);
        }


         
    }

    

    const goribManus = new BankAccount(111, 'Mr. Garib', 100);
    // console.log(goribManus.Balance);
    // goribManus.AddAmount(10); Error - because of getter setter - কাজ করবে Function এর মতো করে কিন্ত ব্যাবহার করতে পারব property এর মতো করে 
    goribManus.AddAmount = 10; 
    console.log(goribManus.Balance);

    
}