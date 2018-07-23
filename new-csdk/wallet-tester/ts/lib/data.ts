import * as fs from 'fs';

export interface IfAccount {
    name: string;
    address: string;
    secret: string;
}

export class Data {
    public static data: any;

    constructor() {


    }
    public static read(filename: string) {
        console.log('read()');

        if (Data.data) {
            return;
        }

        try {
            console.log('read json file');
            const raw = fs.readFileSync(filename);
            console.log('raw', raw);
            const content: string = raw.toString();
            console.log('content', content);

            Data.data = JSON.parse(content);
        } catch (e) {
            throw e;
        }
    }

    // public static accounts: IfAccount[] = [
    //     {
    //         name: 'Genesis',
    //         address: '1EYLLvMtXGeiBJ7AZ6KJRP2BdAQ2Bof79',
    //         secret: '64d8284297f40dc7475b4e53eb72bc052b41bef62fecbd3d12c5e99b623cfc11'
    //     },
    //     {
    //         name: 'John',
    //         address: '12nD5LgUnLZDbyncFnoFB43YxhSFsERcgQ',
    //         secret: 'c07ad83d2c5627acece18312362271e22d7aeffb6e2a6e0ffe1107371514fdc2'
    //     },
    //     {
    //         name: 'Mary',
    //         address: '1LuwjNj8wkqo237N7Gh8nZSSvUa6TZ5ds4',
    //         secret: '9b55dea11fc216e768bf436d0efe9e734ec7bc9e575a935ae6203e5e99dae5ac'
    //     },
    //     {
    //         name: 'Peter',
    //         address: '13CS9dBwmaboedj2hPWx6Dgzt4cowWWoNZ',
    //         secret: 'e109b61f011c9939ac51808fac542b66fcb358f69bf710f5d11eb5d1f3e82bc3'
    //     }
    // ];
    /**
     */
    // public static Server = {
    //     ip: '172.17.0.4',
    //     port: '18089'
    // };

};
// console.log(__dirname);
Data.read(__dirname + '/' + '../data/data.json');