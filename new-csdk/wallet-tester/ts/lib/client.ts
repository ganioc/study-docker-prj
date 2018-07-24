import { Data, IfAccount } from './data';
import { Accounts } from './account';
import { ChainClient, Transaction, BigNumber } from '../csdk/client/client/client';

export class Client {
    private ip: string;
    private port: number;
    private chainClient: ChainClient;

    constructor() {
        // ip: string, port: string
        this.ip = Data.data.servers[0].ip;
        try {
            this.port = parseInt(Data.data.servers[0].port);
        } catch (e) {
            throw e;
        }

        this.chainClient = new ChainClient({
            host: this.ip,
            port: this.port
        });
    }
    public async getBalance(acc: Accounts, account: string, cb: () => void) {

        console.log('client getBalance');

        const _address = acc.getAddressFromAccount(account);

        console.log('address:', _address);

        let ret = await this.chainClient.view({
            method: 'getBalance',
            params: { address: _address }
        });

        if (ret.err) {
            console.error(`get balance failed for ${ret.err};`);
        } else {
            console.log(`${_address}\`s Balance: ${ret.value!}`);
        }

        cb();
    }
    public async transferTo(acc: Accounts, account: string, amount: string, cb: () => void) {

        console.log('client transferTo');
        const to = acc.getAddressFromAccount(account);
        const me: IfAccount = acc.getAccount();

        let tx = new Transaction();
        let fee: string = '0.01';
        let address = me.name;

        tx.method = 'transferTo',
            tx.value = new BigNumber(amount);
        tx.fee = new BigNumber(fee);
        tx.input = { to };

        let { err, nonce } = await this.chainClient.getNonce({ address });
        if (err) {
            console.error(`transferTo failed for ${err}`);
            return;
        }
        tx.nonce = nonce! + 1;
        tx.sign(me.secret);
        err = await this.chainClient.sendTrasaction({ tx });
        if (err) {
            console.error(`transferTo failed for ${err}`);
            return;
        }
        console.log(`send transferTo tx: ${tx.hash}`);
        // watchingTx.push(tx.hash);

        cb();

    }
}