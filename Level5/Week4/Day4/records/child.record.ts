import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
import { Child } from '../types/child';

export class ChildRecord implements Child {
    id: string;
    name: string;
    giftId: string;

    constructor({ id, name, giftId }: Child) {
        if (!name || name.length < 3 || name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 do 25 znaków.');
        }

        this.id = id;
        this.name = name;
        this.giftId = giftId;
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute('INSERT INTO `children`(`id`, `name`) VALUES(:id, :name)', {
            id: this.id,
            name: this.name,
        });

        return this.id;
    }

    static async listAll(): Promise<Child> {
        const [results] = await pool.execute('SELECT * FROM `children` ORDER BY `name` ASC');
        return results.map((obj: Child) => new ChildRecord(obj));
    }

    static async getOne(id: string): Promise<ChildRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `children` WHERE `id` = :id', {
            id,
        });
        return results.length === 0 ? null : new ChildRecord(results[0]);
    }

    async update(): Promise<void> {
        await pool.execute(
            'UPDATE `children` SET `name` = :name, `giftId` = :giftId WHERE `id` = :id',
            {
                id: this.id,
                name: this.name,
                giftId: this.giftId,
            },
        );
    }
}
