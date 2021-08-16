function getInputValue(input) {
    const inputAmount = document.getElementById(input);
    const amountValue = inputAmount.value;
    const totalAmount = parseFloat(amountValue);
    inputAmount.value = '';
    return totalAmount;
}
function getTotalAmount(input, amount) {
    const prevTotal = document.getElementById(input);
    const prevValue = parseFloat(prevTotal.innerText);
    const newValue = amount + prevValue;
    prevTotal.innerText = newValue;
    return newValue;
}
function currentBalance() {
    const TotalBalance = document.getElementById('balance-total');
    const pBalanceValue = TotalBalance.innerText;
    const preBalanceValue = parseFloat(pBalanceValue);
    return preBalanceValue;
}
function totalBalance(newDepositAmount, isAdd) {
    const TotalBalance = document.getElementById('balance-total');
    const preBalanceValue = currentBalance();
    if (isAdd == true) {
        const newTotalBalance = preBalanceValue + newDepositAmount;
        TotalBalance.innerText = newTotalBalance;

    } else {
        const newTotalBalance = preBalanceValue - newDepositAmount;
        TotalBalance.innerText = newTotalBalance;

    }


}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmount = depositInput.value;


    // const totalDeposit = document.getElementById('total-deposit');
    // const PreviousDepositValue = totalDeposit.innerText;
    // const newTotalDeposit = parseFloat(PreviousDepositValue) + newDepositAmount;
    // totalDeposit.innerText = newTotalDeposit;

    // const TotalBalance = document.getElementById('balance-total');
    // const preBalanceValue = TotalBalance.innerText;
    // const newTotalBalance = parseFloat(newDepositAmount) + parseFloat(preBalanceValue);
    // TotalBalance.innerText = newTotalBalance;
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        getTotalAmount('total-deposit', newDepositAmount);
        totalBalance(newDepositAmount, true);
    }

});

//withdraw element handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdawInput = document.getElementById('withdraw-input');
    // const withdrawValue = withdawInput.value;


    // const prevWithdrawTotal = document.getElementById('withdraw-total');
    // const prevwithdrawValue = parseFloat(prevWithdrawTotal.innerText);
    // const newTotalWithdraw = withdrawValue + prevwithdrawValue;
    // prevWithdrawTotal.innerText = newTotalWithdraw;



    //new balance with withdraw

    // const totalBal = document.getElementById('balance-total');
    // const prevBalance = totalBal.innerText;
    // console.log(prevBalance);
    // const newTotalBal = parseFloat(prevBalance) - withdrawValue;
    // totalBal.innerText = newTotalBal;
    const withdrawValue = getInputValue('withdraw-input');
    const currentBalances = currentBalance();
    // console.log(currentBalance);
    if (withdrawValue > 0 && withdrawValue <= currentBalances) {
        getTotalAmount('withdraw-total', withdrawValue);
        totalBalance(withdrawValue, false);
    }

})

