document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const totalDeposit = document.getElementById('total-deposit');
    const PreviousDepositValue = totalDeposit.innerText;
    const newTotalDeposit = parseFloat(PreviousDepositValue) + parseFloat(newDepositAmount);
    totalDeposit.innerText = newTotalDeposit;

    const TotalBalance = document.getElementById('balance-total');
    const preBalanceValue = TotalBalance.innerText;

    const newTotalBalance = parseFloat(newDepositAmount) + parseFloat(preBalanceValue);
    TotalBalance.innerText = newTotalBalance;

    depositInput.value = '';
});

//withdraw element handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdawInput.value;



    const prevWithdrawTotal = document.getElementById('withdraw-total');
    const prevwithdrawValue = prevWithdrawTotal.innerText;



    const newTotalWithdraw = parseFloat(withdrawValue) + parseFloat(prevwithdrawValue);

    prevWithdrawTotal.innerText = newTotalWithdraw;
    withdawInput.value = '';


    //new balance with withdraw

    const totalBal = document.getElementById('balance-total');
    const prevBalance = totalBal.innerText;
    console.log(prevBalance);
    const newTotalBal = parseFloat(prevBalance) - parseFloat(newTotalWithdraw);

    totalBal.innerText = newTotalBal;


})

