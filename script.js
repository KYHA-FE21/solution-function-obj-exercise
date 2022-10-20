// && = och
// || = eller

// för att undvika vissa error (som står som krav) kan du använda
// metoden isNaN(), du behöver själv testa samt söka efter information om
// du inte känner igen den.
//const variableName = 10;
//isNaN(variableName);

const account = {
  accountName: "Helena",
  balance: 100,
  getBalance: function () {
    alert(`Your current balance is ${this.balance}`);
    atm();
  },
  getAccountName: function () {
    alert(`Name of account holder: ${this.accountName}`);
    atm();
  },
  deposit: function () {
    let amount = parseFloat(prompt("How much would you like to deposit?"));

    if (amount <= 0 || isNaN(amount)) {
      this.accountError();
      this.deposit();
    }
    //this.balance = this.balance + amount;
    else {
      this.balance += amount;
      this.getBalance();
    }
  },
  withdrawal: function () {
    let withdraw = parseFloat(prompt("How much would you like to withdrawal?"));
    if (
      withdraw === "" ||
      withdraw <= 0 ||
      isNaN(withdraw) ||
      withdraw > this.balance
    ) {
      this.accountError();
      this.withdrawal();
    } else {
      this.balance -= withdraw;
      this.getBalance();
    }
  },
  accountError: function () {
    alert("Error! Please enter a valid number!");
  },
  exitAccount: function () {
    const leave = confirm("Do you want to exit?");
    if (leave) {
      window.close();
    } else {
      atm();
    }
  },
};

// varför måste vi använda parseFloat?
function atm() {
  const message = parseFloat(
    prompt("1. Show account balance 2. Show account name 3. Deposit 4. Exit ")
  );
  // funktion som har huvudansvar för att visa UI baserat på user input
  // ska inte hantera någon logik alls
  // du välkjer själv om du vill hantera user input med en switch
  // eller med if/else statement

  switch (message) {
    case 1:
      // gör vi något
      account.getBalance();
      break;
    case 2:
      account.getAccountName();
      break;
    case 3:
      account.deposit();
      break;
    case 4:
      account.withdrawal();
      break;
    case 5:
      account.exitAccount();
      break;
    default:
      alert("Not a valid input!");
      break;
  }
}

atm();
