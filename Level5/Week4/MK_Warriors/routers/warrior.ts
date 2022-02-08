import { Response, Request, Router } from 'express';
import { get, post } from '../decorators/rest.decorator';
import { WarriorRecord } from '../records/warrior.record';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class WarriorRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/warrior';

    @get('/')
    private home = (req: Request, res: Response): void => {
        res.render('warrior/index');
    };

    @post('/')
    private addWarior = async (req: Request, res: Response): Promise<void> => {
        res.send(await WarriorRecord.insert(req.body));
    };
}
