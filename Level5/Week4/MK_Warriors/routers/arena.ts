import { Response, Request, Router } from 'express';
import { RowDataPacket } from 'mysql2';
import { get, post } from '../decorators/rest.decorator';
import { WarriorRecord } from '../records/warrior.record';
import { MyRouter } from '../types/my-router';
import { WarriorResponseOk, WarriorResposeError } from '../types/warrior-response';
import { ValidationError } from '../utils/errors';
import { BaseRouter } from './base';

export class ArenaRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/arena';

    @get('/')
    private home = async (req: Request, res: Response): Promise<any> => {
        let result = await WarriorRecord.getAll();

        if (result.hasOwnProperty('error') === true) {
            result = result as WarriorResposeError;
            res.render(`arena/index`, { error: result.error });
        } else {
            result = result as RowDataPacket[];
            res.render('arena/index', { warriors: result });
        }
    };

    // @get('/')
    // private home = async (req: Request, res: Response): Promise<void> => {
    //     // res.send(await WarriorRecord.insert(req.body));
    // };
}
