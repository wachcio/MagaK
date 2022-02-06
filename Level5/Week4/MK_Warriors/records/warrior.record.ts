import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
import { Warrior } from '../types/warrior';
import { FieldPacket } from 'mysql2';

type WarriorRecordResult = [WarriorRecord[], FieldPacket[]];

export class WarriorRecord implements Warrior {
    public id?: string;
    public name: string;
    public giftId: string | null;

    constructor({ id, name, giftId }: WarriorRecord) {
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

        await pool.execute('INSERT INTO `Warriorren`(`id`, `name`) VALUES(:id, :name)', {
            id: this.id,
            name: this.name,
        });

        return this.id;
    }

    static async listAll(): Promise<WarriorRecord[]> {
        const [results] = (await pool.execute(
            'SELECT * FROM `Warriorren` ORDER BY `name` ASC',
        )) as WarriorRecordResult;
        return results.map((obj: WarriorRecord) => new WarriorRecord(obj));
    }

    static async getOne(id: string): Promise<WarriorRecord | null> {
        const [results] = (await pool.execute('SELECT * FROM `Warriorren` WHERE `id` = :id', {
            id,
        })) as WarriorRecordResult;
        return results.length === 0 ? null : new WarriorRecord(results[0]);
    }

    async update(): Promise<void> {
        await pool.execute(
            'UPDATE `Warriorren` SET `name` = :name, `giftId` = :giftId WHERE `id` = :id',
            {
                id: this.id,
                name: this.name,
                giftId: this.giftId,
            },
        );
    }
}
