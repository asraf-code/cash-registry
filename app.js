const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const noteDenominatons = [2000, 500, 100, 20, 10, 5, 1];



checkButton.addEventListener("click", function processBillCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returningAmount = cashGiven.value - billAmount.value;
            calculateChange(returningAmount);
        } else {
            showMessage("Do you want to wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(returningAmount) {
    for (let i = 0; i < noteDenominatons.length; i++) {
        const numberOfNotes = Math.trunc(
            returningAmount / noteDenominatons[i]
        );
        returningAmount = returningAmount % noteDenominatons[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}