import express, { Application, json, Response, Request, static as expressStatic } from 'express';
// import cookieParser from 'cookie-parser';
import { engine } from 'express-handlebars';
import { HomeRouter } from './routers/home';
import { handlebarsHelpers } from './utils/handlebars-helpers';
// import { Entries } from './types/entries';
import { MyRouter } from './types/my-router';
import { Warrior } from './routers/warrior';

export class MK_Warriors {
    private app: Application = express();
    private readonly routers = [HomeRouter, Warrior];
    constructor() {
        this._configureApp();
        this._setRoutes();
        this._run(3000);
    }

    _configureApp(): void {
        this.app = express();

        this.app.use(json());
        this.app.use(expressStatic('public'));
        // this.app.use(cookieParser());
        this.app.engine(
            '.hbs',
            engine({
                extname: '.hbs',
                helpers: handlebarsHelpers,
            }),
        );
        this.app.set('view engine', '.hbs');
    }

    _setRoutes(): void {
        for (const router of this.routers) {
            const obj: MyRouter = new router(this);
            this.app.use(obj.urlPrefix, obj.router);
        }
    }

    _run(port: number): void {
        this.app.listen(port, '0.0.0.0', () => {
            console.log(`Listening on http://localhost:${port}`);
        });
    }

    showErrorPage(res: Response, description: any): void {
        res.render('error', {
            description,
        });
    }
    // getAddonsFromReq(req: Request): string[] {
    //     const { cookieAddons } = req.cookies as {
    //         cookieAddons: string;
    //     };
    //     return cookieAddons ? JSON.parse(cookieAddons) : [];
    // }

    // getCookieSettings(req: Request): {
    //     addons: string[];
    //     base?: string;
    //     sum: number;
    //     allBases: Entries;
    //     allAddons: Entries;
    // } {
    //     const { cookieBase: base } = req.cookies as {
    //         cookieBase?: string;
    //     };

    //     const addons = this.getAddonsFromReq(req);

    //     const allBases = Object.entries(this.data.COOKIE_BASES);
    //     const allAddons = Object.entries(this.data.COOKIE_ADDONS);

    //     const sum =
    //         (base ? handlebarsHelpers.findPrice(allBases, base) : 0) +
    //         addons.reduce((prev, curr) => prev + handlebarsHelpers.findPrice(allAddons, curr), 0);

    //     return {
    //         // Selected stuff
    //         addons,
    //         base,

    //         // Calculations
    //         sum,

    //         // All possibilities
    //         allBases,
    //         allAddons,
    //     };
    // }
}

new MK_Warriors();
