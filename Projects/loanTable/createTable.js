function createTable() {
    event.preventDefault();
    let loanAmount = document.getElementById("loanAmount").value,
        interestRate = document.getElementById("interestRate").value,
        paymentAmount = document.getElementById("paymentAmount").value,
        table = document.getElementById("loanTable"),
        month = 1;

    let loanBalance = loanAmount;

    table.innerHTML = "";
    let tableHeader = '<tr><th>Loan Amount:</th><th>Loan Balance:</th></tr>';
    table.insertAdjacentHTML('beforeend', tableHeader);

    while (loanBalance > 0) {
        let oldLoanBalance = loanBalance;
        loanBalance = loanBalance - paymentAmount + (interestRate / 120 * loanAmount);
        
        if (loanBalance > oldLoanBalance){
            alert('Warning! Interest is greater than payment amount!');
            break;
        } 

        if (loanBalance > 0) {
            month = ++month;
            let tableContent = '<tr><td>' + loanAmount + '</td><td>' + loanBalance + '</td></tr>';
            table.insertAdjacentHTML('beforeend', tableContent);
        }

        if (loanBalance < 0){
            let tableEnd = '<tr><th>Payments:</th><th>Interest:</th></tr><tr><td>' + --month + '</td><td>' + (interestRate / 100 * loanAmount) + '</td></tr>';
            table.insertAdjacentHTML('beforeend', tableEnd);
            break;
        }  
    }
}