import { Response, Request, Router } from 'express';
import { get } from '../decorators/rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class HomeRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/';

    @get('/')
    private home = (req: Request, res: Response): void => {
        // const { sum, addons, base, allBases, allAddons } = this.mkwarrior.getCookieSettings(req);

        res.render('home/index');
        // res.render('home/index', {
        //     cookie: {
        //         base,
        //         addons,
        //     },
        //     allBases,
        //     allAddons,
        //     sum,
        // });
    };
}
