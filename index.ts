#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



console.log(chalk.bgRed.bold("Welcome to Currency Converter"));


const currency : any = {
    PKR : 1,   //baseCurrency
    USD : 0.0036,
    INR : 0.30,
    SAR : 0.014,
    GBP : 0.0028,
    AED : 0.013,
    IRR : 151.60,
}


let user_Ans = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : chalk.bgMagentaBright("Enter from currency"),
            choices : ["PKR","USD","INR","SAR","GBP","AED","IRR"]

        },
        {
            name : "to",
            type : "list",
            message : chalk.bgCyanBright("Enter to currency"),
            choices : ["PKR","USD","INR","SAR","GBP","AED","IRR"]
        },
        {
            name : "amount",
            type : "number",
            message : chalk.bgBlueBright("Enter your amount")
            }
        
    ]
);
let fromAmount = currency[user_Ans.from];
let toAmount = currency[user_Ans.to];
let amount = user_Ans.amount;
let baseAmount = amount / fromAmount;
let converter = baseAmount * toAmount;

console.log(converter);



