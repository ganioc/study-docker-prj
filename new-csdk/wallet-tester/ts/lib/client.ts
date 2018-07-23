import { Data } from './data';

export class Client {
    private ip: string;
    private port: number;
    constructor() {
        // ip: string, port: string
        this.ip = Data.data.servers[0].ip;
        try {
            this.port = parseInt(Data.data.servers[0].port);
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