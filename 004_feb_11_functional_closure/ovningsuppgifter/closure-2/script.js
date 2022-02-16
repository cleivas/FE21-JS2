function newAccount(money = 0){

    // function deposit(moneyIn){
    //     money+=moneyIn;
    // }
    // function withdraw(moneyOut){
    //     money-=moneyOut;
    // }
    // function checkAmount(){
    //     return money;
    // }

    const deposit = moneyIn => {money+=moneyIn};
    const withdraw = moneyOut => {money-=moneyOut};
    const checkAmount = () => money;

    return {
        deposit: deposit,
        withdraw: withdraw,
        checkAmount: checkAmount
    }
}

const account1 = newAccount(1000);
const account2 = newAccount(12432);