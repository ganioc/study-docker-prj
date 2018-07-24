
import * as inquirer from 'inquirer';
import * as _ from 'lodash';
import * as colors from 'colors';
import { Accounts } from './account';
import { Client } from './client';
import * as EventEmitter from 'events';

interface IfMenuCommand {
    command: string
}
interface IfMenuAccount {
    account: string;
}
interface IfMenuTransfer {
    account: string;
    value: string;
}
const topCommands = [
    'Get balance',
    'Transfer to',
    'Exit'
];


const topMenus = [
    {
        type: 'list', name: 'command', message: 'Choose an Command (选择命令)', choices: topCommands
    }
];

// client to visit 
const client = new Client();

export class Cmd extends EventEmitter {
    constructor() {
        super();
        // this.on('getBalance', (acc: Accounts) => {
        //     console.log('rx getBalance');
        //     this.getBalance(acc);
        // });
        // this.on('transferTo', (acc: Accounts) => {
        //     console.log('rx transferTo');
        //     this.transferTo(acc);
        // });
    }
    // private async getBalance(acc: Accounts) {

    // }
    // private async transferTo(acc: Accounts) {

    // }
    private async showMenuGetbalance(acc: Accounts) {
        // only need an Address 
        const getAddresses = () => {
            const output: string[] = [];
            output.push(acc.getAccount().name);

            _.map(acc.getAccounts(), ele => {
                output.push(ele.name);
            });

            return output;
        };

        const getBalanceMenus = [
            {
                type: 'list', name: 'account', message: 'Choose an Account (选择地址)', choices: getAddresses()
            }
        ];
        return new Promise((resolve, reject) => {
            inquirer.prompt(getBalanceMenus)
                .then((answers) => {
                    const accTemp: IfMenuAccount = answers as IfMenuAccount;
                    console.log(accTemp.account);
                    console.log('');

                    client.getBalance(acc, accTemp.account, () => {
                        this.showMenu(acc);
                    })

                    resolve('OK');
                    // this.showMenu(acc);
                });
        });

    }
    private async showMenuTransferto(acc: Accounts) {
        // need address and amount
        const getAddresses = () => {
            const output: string[] = [];

            _.map(acc.getAccounts(), ele => {
                output.push(ele.name);
            });

            return output;
        };

        const transferToMenus = [
            {
                type: 'list', name: 'account', message: 'Choose an Account (选择地址)', choices: getAddresses()
            },
            {
                type: 'input', name: 'value', message: 'Input a value (输入要转移的值)', default: '0'
            }
        ];
        return new Promise((resolve, reject) => {
            inquirer.prompt(transferToMenus)
                .then((answers) => {
                    const accTemp: IfMenuTransfer = answers as IfMenuTransfer;
                    console.log(accTemp.account);
                    console.log(accTemp.value);
                    console.log('');

                    // 

                    client.transferTo(acc, accTemp.account, accTemp.value, () => {
                        this.showMenu(acc);
                    });
                    resolve('OK');
                });
        });

    }
    public async showMenu(acc: Accounts) {
        console.log(colors.green('\n\n----------------------------------------------'));
        console.log('  主账号:', colors.red(acc.getAccount().name));
        console.log('  Get Balance:', colors.blue('获取某账户/地址的余额 '));
        console.log('  Transfer To:', colors.blue('向某账户地址转移价值 '));
        console.log(colors.green('----------------------------------------------'));

        inquirer.prompt(topMenus)
            .then((answers) => {

                const ans: IfMenuCommand = answers as IfMenuCommand;
                console.log(ans.command + '\n');
                switch (ans.command) {
                    case 'Get balance':
                        this.showMenuGetbalance(acc);
                        break;
                    case 'Transfer to':
                        this.showMenuTransferto(acc);
                        break;
                    case 'Exit':
                        console.log(colors.green('Bye\n'));
                        break;
                    default:
                        throw new Error("Unknown command:" + ans.command);
                }
            });
    }
}