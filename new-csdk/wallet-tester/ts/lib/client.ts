import { IfAccount, Data } from './data';

export class Client {
    private ip: string;
    private port: number;
    constructor() {
        // ip: string, port: string

        this.ip = Data.Server.ip;
        try {
            this.port = parseInt(Data.Server.port);
        } catch (e) {
            throw e;
        }

    }
    public async getBalance(cb: () => void) {
        return new Promise((resolve, reject) => {
            console.log('client getBalance');
            cb();
        });
    }
    public async transferTo(cb: () => void) {
        return new Promise((resolve, reject) => {
            console.log('client transferTo');
            cb();
        });
    }
}