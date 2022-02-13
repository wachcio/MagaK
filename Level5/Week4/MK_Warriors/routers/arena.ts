import { Response, Request, Router } from 'express';
import { RowDataPacket } from 'mysql2';
import { get, post } from '../decorators/rest.decorator';
import { WarriorRecord } from '../records/warrior.record';
import { MyRouter } from '../types/my-router';
import { WarriorResponseOk, WarriorResposeError } from '../types/warrior-response';
import { ValidationError } from '../utils/errors';
import { fightLog } from '../utils/fight_log';
import { BaseRouter } from './base';

export class ArenaRouter extends BaseRouter implements MyRouter {
    public readonly urlPrefix = '/arena';

    @get('/')
    private home = async (req: Request, res: Response): Promise<any> => {
        let result = await WarriorRecord.getAll();

        if (result.hasOwnProperty('error') === true) {
            result = result as WarriorResposeError;
            res.render(`arena/index`, { error: result.error });
        } else {
            result = result as RowDataPacket[];
            res.render('arena/index', { warriors: result });
        }
    };

    @get('/fight')
    private fight = async (req: Request, res: Response): Promise<void> => {
        // console.log(req.query);
        // res.send(req.query);
        if (!req.query.warrior1 || !req.query.warrior2) {
            throw new ValidationError('Nie podano wojowników');
        }

        let result = await WarriorRecord.checkWarriors({
            warrior1: req.query.warrior1 as string,
            warrior2: req.query.warrior2 as string,
        });
        if (result.hasOwnProperty('error') === true) {
            result = result as WarriorResposeError;
            res.render(`arena/index`, { error: result.error });
        } else {
            result = result as [RowDataPacket, RowDataPacket];
            const log = fightLog(result[0][0], result[1][0]);

            res.render('arena/fight', { warrior1: result[0], warrior2: result[1], log });
        }
    };
}
