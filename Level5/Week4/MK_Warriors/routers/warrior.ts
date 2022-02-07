import { Response, Request, Router } from 'express';
import { get, post } from '../decorators/rest.decorator';
import { WarriorRecord } from '../records/warrior.record';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class Warrior extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/warrior';

    @post('/')
    private home = async (req: Request, res: Response): Promise<void> => {
        res.send(await WarriorRecord.insert(req.body));
    };
}
