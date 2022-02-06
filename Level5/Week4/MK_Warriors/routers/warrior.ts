import { Response, Request, Router } from 'express';
import { get, post } from '../decorators/rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class Warrior extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/warrior';

    @post('/')
    private home = (req: Request, res: Response): void => {
        console.log(req.body);
        res.render('warrior/index');
    };
}
