{
    /**
     * 
     * Access Modifiers:
     * 
     * - public
     * - protected
     * - private
     * 
     * Analogy :
     * 
     * 🛑 Private: Your bedroom — only you (the class) can enter.
     * ⚠️ Protected: Your family room — only you and your children (derived classes) can access.
     * ✅ Public: Your front yard — anyone can access it.
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

    class StuentAccount extends BankAccount{
        test(){
            this.showBalance()
        }

    }

    const goribManus = new BankAccount(111, 'Mr. Garib', 100);
    // goribManus._balance = 0;
    // console.log(goribManus.balance);
    // console.log(goribManus.showBalance());
    // goribManus.moneyDiposit(100);
    // goribManus.withdrawMoney(70);





}