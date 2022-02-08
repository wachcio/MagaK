import { Response, Request, Router } from 'express';

export const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => {
    res.redirect('/child');
});
