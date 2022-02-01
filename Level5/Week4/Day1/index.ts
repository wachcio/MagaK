import express, { Application, json, Response, Request, static as expressStatic } from 'express';
import cookieParser from 'cookie-parser';
import { engine } from 'express-handlebars';
import { HomeRouter } from './routes/home';
import { ConfiguratorRouter } from './routes/configurator';
import { OrderRouter } from './routes/order';
import { handlebarsHelpers } from './utils/handlebars-helpers';
import { COOKIE_BASES, COOKIE_ADDONS } from './data/cookies-data';
import { Entries } from './types/entries';

export class CookieMakerApp {
    private app: Application = express();
    public data = {
        COOKIE_BASES,
        COOKIE_ADDONS,
    };
    constructor() {
        this._configureApp();
        this._setRoutes();
        this._run();
    }

    _configureApp(): void {
        this.app = express();

        this.app.use(json());
        this.app.use(expressStatic('public'));
        this.app.use(cookieParser());
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
        this.app.use('/', new HomeRouter(this).router);
        this.app.use('/configurator', new ConfiguratorRouter(this).router);
        this.app.use('/order', new OrderRouter(this).router);
    }

    _run(): void {
        this.app.listen(3000, '0.0.0.0', () => {
            console.log('Listening on http://localhost:3000');
        });
    }

    showErrorPage(res: Response, description: any): void {
        res.render('error', {
            description,
        });
    }

    getAddonsFromReq(req: Request): string[] {
        const { cookieAddons } = req.cookies as {
            cookieAddons: string;
        };
        return cookieAddons ? JSON.parse(cookieAddons) : [];
    }

    getCookieSettings(req: Request): {
        addons: string[];
        base?: string;
        sum: number;
        allBases: Entries;
        allAddons: Entries;
    } {
        const { cookieBase: base } = req.cookies as {
            cookieBase?: string;
        };

        const addons = this.getAddonsFromReq(req);

        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allAddons = Object.entries(this.data.COOKIE_ADDONS);

        const sum =
            (base ? handlebarsHelpers.findPrice(allBases, base) : 0) +
            addons.reduce((prev, curr) => prev + handlebarsHelpers.findPrice(allAddons, curr), 0);

        return {
            // Selected stuff
            addons,
            base,

            // Calculations
            sum,

            // All possibilities
            allBases,
            allAddons,
        };
    }
}

new CookieMakerApp();
