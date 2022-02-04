import { Response, Request, Router } from 'express';
import { rest } from '../rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class OrderRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/order';

    @rest('get', '/summary')
    sumary = (req: Request, res: Response) => {
        const { sum, addons, base, allBases, allAddons } = this.cmapp.getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };

    @rest('get', '/thanks')
    thanks = (req: Request, res: Response) => {
        const { sum } = this.cmapp.getCookieSettings(req);

        res.clearCookie('cookieBase').clearCookie('cookieAddons').render('order/thanks', {
            sum,
        });
    };
}
