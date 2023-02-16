document.getElementById('main-deposite').addEventListener('click', function(){
    const inputDeposite = document.getElementById('input-deposite');
    const depositeamountString = inputDeposite.value;
    const depositeamount = parseFloat(depositeamountString);
    inputDeposite.value = '';
    if(isNaN(depositeamount)){
        alert('please provide valid number !!');
        return;
    };

    const innerDeposite = document.getElementById('deposite');
    const depositeAmountString = innerDeposite.innerText;
    const depositeAmount = parseFloat(depositeAmountString);

    const addDeposite = depositeamount + depositeAmount ;
    innerDeposite.innerText = addDeposite;

    const mainDeposite = document.getElementById('balance');
    const mainDepositeString = mainDeposite.innerText;
    const mainDepositeAmount = parseFloat(mainDepositeString);
    console.log(mainDepositeAmount);

    const addMainDeposite = depositeamount + mainDepositeAmount ;
    mainDeposite.innerText = addMainDeposite ;

});

document.getElementById('main-withdraw').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const WithdrawamountString = inputWithdraw.value;
    const Withdrawamount = parseFloat(WithdrawamountString);
    inputWithdraw.value = '';
    if(isNaN(Withdrawamount)){
        alert('please provide valid number !!');
        return;
    };

    const innerWithdraw = document.getElementById('withdraw');
    const WithdrawAmountString = innerWithdraw.innerText;
    const depositeAmount = parseFloat(WithdrawAmountString);

    const mainDeposite = document.getElementById('balance');
    const mainDepositeString = mainDeposite.innerText;
    const mainDepositeAmount = parseFloat(mainDepositeString);

    if(Withdrawamount > mainDepositeAmount){
        alert('Tor Baap ar Bank a eto TK nai !!');
        return;
    };

    const addWithdraw = Withdrawamount + depositeAmount ;
    innerWithdraw.innerText = addWithdraw;

    const addMainWithdraw = mainDepositeAmount - Withdrawamount;
    mainDeposite.innerText = addMainWithdraw ;
});