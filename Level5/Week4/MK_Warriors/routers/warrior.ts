import { Response, Request, Router } from 'express';
import { get, post } from '../decorators/rest.decorator';
import { WarriorRecord } from '../records/warrior.record';
import { MyRouter } from '../types/my-router';
import { WarriorResponseOk, WarriorResposeError } from '../types/warrior-response';
import { BaseRouter } from './base';

export class WarriorRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/warrior';

    @get('/')
    private home = (req: Request, res: Response): void => {
        res.render('warrior/index');
    };

    @post('/')
    private addWarior = async (req: Request, res: Response): Promise<void> => {
        let result = await WarriorRecord.insert(req.body);
        console.log(result);

        if (result.hasOwnProperty('id') === true) {
            result = result as WarriorResponseOk;
            res.render('warrior/warrior-add-confirmation', { name: result.name });
        } else {
            result = result as WarriorResposeError;
            res.render(`warrior/index`, { error: result.error });
        }
    };
}
