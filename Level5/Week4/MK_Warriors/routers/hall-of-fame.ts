import { Response, Request, Router } from 'express';
import { get } from '../decorators/rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class HallOfFameRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/hall-of-fame';

    @get('/')
    private home = (req: Request, res: Response): void => {
        res.render('hall-of-fame/index');
    };

    // @get('/')
    // private home = async (req: Request, res: Response): Promise<void> => {
    //     // res.send(await WarriorRecord.insert(req.body));
    // };
}
