#! usr/bin/env node
import inquirer from 'inquirer';
let myPin = 1234;
let myBalance = 500000;
console.log("\n\tWelcome to the CLI ATM Machine");
const checkPin = await inquirer.prompt([
    {
        name: "pin",
        type: "password",
        message: "\n\tPlease Enter your pin",
    }
]);
//checking the password
if (checkPin.pin == myPin) {
    console.log("\n\tPIN is correct");
}
else {
    console.log("Incorrect Pin");
}
//writing atm functionality
const atm = await inquirer.prompt([
    {
        name: "atm",
        type: "list",
        message: "\n\tWhat do you want to do?",
        choices: ["Withdraw", "Balance", "Fast Cash", "Exit"]
    },
]);
if (atm.atm == "Withdraw") {
    const withdraw = await inquirer.prompt([
        {
            name: "withdraw",
            type: "number",
            message: "\n\tEnter the amount you want to withdraw",
        }
    ]);
    if (withdraw.withdraw > myBalance) {
        console.log("\n\tInsufficient Balance");
    }
    else {
        console.log("\n\tYour Balance is", myBalance - withdraw.withdraw);
    }
}
else if (atm.atm == "Balance") {
    console.log("\n\tYour Current Balance is", myBalance);
}
else if (atm.atm == "Fast Cash") {
    const fastCash = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message: "\n\tSelect the amount you want to withdraw",
            choices: ["500", "1000", "2000", "5000", "10000"]
        }
    ]);
    console.log("\n\tYour Balance is", myBalance - parseInt(fastCash.fastCash));
}
