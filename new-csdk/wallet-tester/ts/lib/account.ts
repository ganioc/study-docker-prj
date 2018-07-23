import { IfAccount } from './data';
import * as inquirer from 'inquirer';
import { Data } from './data';
import * as colors from 'colors';
import { resolve } from 'url';
// const accounts = new Accounts('', Data.accounts);
// const menu = new Menu();
interface IfMenuAccount {
    account: string
}
const accountList = [
    {
        type: 'list', name: 'account', message: 'Choose an Account (选择主账号)', choices: Data.accounts.map((e) => {
            return e.name;
        })
    },
];

export class Accounts {
    private account: IfAccount;
    private accounts: IfAccount[];

    constructor() {
        this.account = {} as IfAccount;
        this.accounts = [];

        // inAccounts.forEach((acc: IfAccount) => {
        //     this.accounts.push(acc);
        // });
    }
    public getAccounts() {
        return this.accounts;
    }
    public getAccount() {
        return this.account;
    }
    public setAccount(name: string) {
        this.accounts = [];
        Data.accounts.forEach((e) => {
            if (name === e.name) {
                this.account = e;
            } else {
                this.accounts.push(e);
            }
        });
        // console.log(this.account);
        // console.log(this.accounts);
    }
    public async showMenu() {
        console.log('');
        return new Promise((resolve, reject) => {
            inquirer.prompt(accountList)
                .then((answers) => {
                    // console.log(typeof answers);
                    const ans: IfMenuAccount = answers as IfMenuAccount;
                    console.log(colors.yellow('Account:'), ans.account);
                    this.setAccount(ans.account);
                    console.log(colors.yellow('Address:'), this.getAccount().address);
                    console.log(colors.yellow('Secret:'), this.getAccount().secret);
                    console.log('');
                    resolve("OK");
                });
        });
    }
}