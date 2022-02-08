import { Response, Request, Router } from 'express';
import { get, post } from '../decorators/rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class ArenaRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/arena';

    @get('/')
    private home = (req: Request, res: Response): void => {
        res.render('arena/index');
    };

    // @get('/')
    // private home = async (req: Request, res: Response): Promise<void> => {
    //     // res.send(await WarriorRecord.insert(req.body));
    // };
}
