document.getElementById('user-login').addEventListener('click', function(){
    const LoginArea = document.getElementById('login-area');
    LoginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

const depositButton = document.getElementById('depositBtn');
depositButton.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    amount = parseFloat(depositAmount);
    let initialDepositAmount = parseFloat(document.getElementById('deposit').innerText);
    document.getElementById('deposit').innerText = initialDepositAmount + amount;
    let initialBalance = document.getElementById('balance').innerText;
    let balance = parseFloat(initialBalance);
    document.getElementById('balance').innerText = balance + amount;
    document.getElementById('depositAmount').value = "";
});

const withdrawButton = document.getElementById('withdrawButton');
withdrawButton.addEventListener('click', function(){
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    let initialWithdrawAmount = parseFloat(document.getElementById('withdraw').innerText);
    document.getElementById('withdraw').innerText = initialWithdrawAmount + withdrawAmount;
    const initialBalance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('balance').innerText = initialBalance - withdrawAmount;
    document.getElementById('withdrawAmount').value = "";
});