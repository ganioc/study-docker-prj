import { ErrorCode } from '../types';
import { RPCClient } from '../lib/rpc_client';
import { Transaction } from '../../core/value_chain/transaction';
import { BufferWriter } from '../../core/lib/writer';
import * as colors from 'colors';

export type HostClientOptions = { host: string, port: number };

export class HostClient {
    constructor(options: HostClientOptions) {
        this.m_client = new RPCClient(options.host, options.port);
    }

    async getNonce(params: { address: string }): Promise<{ err: ErrorCode, nonce?: number }> {
        let cr = await this.m_client.callAsync('getNonce', params);
        if (cr.ret !== 200) {
            return { err: ErrorCode.RESULT_FAILED };
        } else {

        }
        return JSON.parse(cr.resp!);
    }

    /*
        async getBlock(params: { which: string | number | 'lastest', transactions?: boolean }): Promise<{ err: ErrorCode, block?: any }> {
            let cr = await this.m_client.callAsync('getBlock', params);
            if (cr.ret !== 200) {
                return { err: ErrorCode.RESULT_FAILED };
            }
            return JSON.parse(cr.resp!);
        }
    
        async getTransactionReceipt(params: { tx: string }): Promise<{ err: ErrorCode, block?: any, tx?: any, receipt?: any }> {
            let cr = await this.m_client.callAsync('getTransactionReceipt', params);
            if (cr.ret !== 200) {
                return { err: ErrorCode.RESULT_FAILED };
            }
            return JSON.parse(cr.resp!);
        }
    
        */

    async sendTrasaction(params: { tx: Transaction }): Promise<ErrorCode> {
        let writer = new BufferWriter;
        params.tx.encode(writer);
        let cr = await this.m_client.callAsync('sendTransaction', { tx: writer.render() });
        if (cr.ret !== 200) {
            console.log(colors.red('callAsync sendTransaciotn return not 200'));
            return ErrorCode.RESULT_FAILED;
        } else {
            console.log(colors.red('callAsync sendTransaciotn OK 200'));
        }
        return JSON.parse(cr.resp!) as ErrorCode;
    }

    async view(params: { method: string, params: any, from?: number | string | 'latest' }): Promise<{ err: ErrorCode, value?: any }> {
        let cr = await this.m_client.callAsync('view', params);
        if (cr.ret !== 200) {
            return { err: ErrorCode.RESULT_FAILED };
        }
        return JSON.parse(cr.resp!);
    }

    private m_client: RPCClient;
}