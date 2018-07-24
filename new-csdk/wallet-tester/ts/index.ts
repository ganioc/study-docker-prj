
// import { Data } from './lib/data';
import { Accounts } from './lib/account';
// import { Menu } from './lib/menu';
// import * as program from 'commander';
import { Cmd } from './lib/cmd';


// console.log(Data.accounts);
const accounts = new Accounts();
const cmd = new Cmd();


async function main() {
    // choose account
    await accounts.showMenu();

    // run with menu
    cmd.showMenu(accounts);
}

main();