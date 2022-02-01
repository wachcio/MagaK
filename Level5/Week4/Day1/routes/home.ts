import { Response, Request, Router } from 'express';
import { CookieMakerApp } from '..';

export class HomeRouter {
    public readonly router: Router = Router();
    constructor(public cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/', this.home);
    }

    home = (req: Request, res: Response) => {
        const { sum, addons, base, allBases, allAddons } = this.cmapp.getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };
}
