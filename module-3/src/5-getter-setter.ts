{
    /**
     * Topic: Getter and Setter
     * 
     * কাজ করবে Function এর মতো করে কিন্ত ব্যাবহার করতে পারব property এর মতো করে ।
     * 
     * - get - getter - to get value
     * - set - setter - to set value
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

        protected showBalance(){
            return this._balance
        }

        // add money
        protected moneyDiposit(amount:number){
            this._balance = this._balance + amount;
            console.log(`Successfully added ${amount}. Now current Balance is ${this._balance}`);
        }

        // withdraw money
        protected withdrawMoney(amount:number){
            if(amount < this._balance){
                this._balance = this._balance - amount;
                console.log(`You withdraw money ${amount} tk. Now balance is ${this._balance} tk`);
            }else{
                console.log('You dont have enough Balance!');
            }
        }
    }

    

    const goribManus = new BankAccount(111, 'Mr. Garib', 100);

    
}