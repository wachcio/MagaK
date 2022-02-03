import { Response, Request } from 'express';

const { Router } = require('express');

export const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => {
    res.redirect('/child');
});
