import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your Pin number:",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct");
    let Account = await inquirer.prompt([
        { name: "operation",
            message: "Select Your Transition Type",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check Balance"] }
    ]);
    if (Account.operation === "Withdraw") {
        let AmountAns = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter Amount",
            },
        ]);
        myBalance -= AmountAns.Amount;
        console.log(`Your Remaining Balance is:${myBalance}`);
    }
    else if (Account.operation === "Check Balance") {
        console.log(`Your Balance is:${myBalance}`);
    }
}
else {
    console.log("Invalid pin");
}
