function getInputValue(getInput) {
    const inputField = document.getElementById(getInput);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalText = parseFloat(balanceTotalText);
    return previousTotalText;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousTotalText = parseFloat(balanceTotalText);
    const previousTotalText = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousTotalText + depositAmount;
    }
    else {
        balanceTotal.innerText = previousTotalText - depositAmount;
    }
}




document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    // update Balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousTotalText = parseFloat(balanceTotalText);
    // const balanceAmount = previousTotalText + depositAmount;
    // balanceTotal.innerText = balanceAmount;

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount);
        updateBalance(depositAmount, true);
    }

    // clear input Text

    // balanceTotal.value = '';
})

// handle Withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotalText = parseFloat(withdrawTotalText);
    // const withdrawTotalAmount = withdrawAmount + previouswithdrawTotalText;
    // withdrawTotal.innerText = withdrawTotalAmount;

    // Update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const BalanceTotalAmount = previousBalanceTotal - withdrawAmount;
    // balanceTotal.innerText = BalanceTotalAmount;
    // clear input
    // withdrawInput.value = '';

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw money more than you have in your account');
    }
})