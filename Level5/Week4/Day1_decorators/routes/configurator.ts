import { Response, Request, Router } from 'express';
import { COOKIE_ADDONS_KEYS, COOKIE_BASES, COOKIE_BASES_KEYS } from '../data/cookies-data';
import { rest } from '../rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class ConfiguratorRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/configurator';

    @rest('get', '/select-base/:baseName')
    private selectBase = (req: Request, res: Response) => {
        const { baseName } = req.params as { baseName: COOKIE_BASES_KEYS };

        if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            return this.cmapp.showErrorPage(res, `There is no such base as ${baseName}.`);
        }

        res.cookie('cookieBase', baseName).render('configurator/base-selected', {
            baseName,
        });
    };

    @rest('get', '/add-addon/:addonName')
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

    @rest('get', '/delete-addon/:addonName')
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
