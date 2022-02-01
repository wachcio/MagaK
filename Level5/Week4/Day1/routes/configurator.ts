import { Response, Request, Router } from 'express';
import { CookieMakerApp } from '..';
import { COOKIE_ADDONS_KEYS, COOKIE_BASES, COOKIE_BASES_KEYS } from '../data/cookies-data';

export class ConfiguratorRouter {
    public readonly router: Router = Router();
    constructor(public cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }

    private setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/add-addon/:addonName', this.addAddon);
        this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }

    private selectBase = (req: Request, res: Response) => {
        const { baseName } = req.params as { baseName: COOKIE_BASES_KEYS };

        if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            return this.cmapp.showErrorPage(res, `There is no such base as ${baseName}.`);
        }

        res.cookie('cookieBase', baseName).render('configurator/base-selected', {
            baseName,
        });
    };

    private addAddon = (req: Request, res: Response) => {
        const { addonName } = req.params as { addonName: COOKIE_ADDONS_KEYS };

        if (!this.cmapp.data.COOKIE_ADDONS[addonName]) {
            return this.cmapp.showErrorPage(res, `There is no such addon as ${addonName}.`);
        }

        const addons = this.cmapp.getAddonsFromReq(req);

        if (addons.includes(addonName)) {
            return this.cmapp.showErrorPage(
                res,
                `${addonName} is already on your cookie. You cannot add it twice.`,
            );
        }

        addons.push(addonName);

        res.cookie('cookieAddons', JSON.stringify(addons)).render('configurator/added', {
            addonName,
        });
    };

    private deleteAddon = (req: Request, res: Response) => {
        const { addonName } = req.params;

        const oldAddons = this.cmapp.getAddonsFromReq(req);

        if (!oldAddons.includes(addonName)) {
            return this.cmapp.showErrorPage(
                res,
                `Cannot delete something that isn't already added to the cookie. ${addonName} not found on cookie.`,
            );
        }

        const addons = oldAddons.filter((addon) => addon !== addonName);

        res.cookie('cookieAddons', JSON.stringify(addons)).render('configurator/deleted', {
            addonName,
        });
    };
}
