import { Router } from 'express';
import { MK_Warriors } from '..';
import { RestDecoratorInfo } from '../types/rest-decorator';

export class BaseRouter {
    public readonly router: Router = Router();

    constructor(protected mkwarrior: MK_Warriors) {
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        const ar: RestDecoratorInfo[] = Reflect.get(this, '_restApiCalls') ?? [];

        for (const apiOp of ar) {
            this.router[apiOp.httpMethod](apiOp.path, (...arg) =>
                (this as any)[apiOp.propertyName](...arg),
            );
        }
    }
}
