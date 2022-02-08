import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
// import { Warrior } from '../types/warrior';
import { FieldPacket } from 'mysql2';
import { WarriorResponse } from '../types/warrior-response';

type WarriorRecordResult = [WarriorRecord[], FieldPacket[]];

export class WarriorRecord implements WarriorRecord {
    public id?: string;
    public name: string;
    public power: number;
    public defense: number;
    public resistance: number;
    public agility: number;

    constructor(public obj: WarriorRecord) {
        // if (!name || name.length < 3 || name.length > 25) {
        //     throw new ValidationError('Imię musi mieć od 3 do 25 znaków.');
        // }
        this.name = obj.name;
        this.power = obj.power;
        this.defense = obj.resistance;
        this.resistance = obj.resistance;
        this.agility = obj.agility;
    }

    static async insert(obj: WarriorRecord): Promise<WarriorResponse> {
        // console.log({ warrior: obj });

        try {
            const id = uuid();
            if (!obj.name) throw new ValidationError('Wojownik musi mieć nazwę');
            if (
                Number(obj.power) +
                    Number(obj.defense) +
                    Number(obj.resistance) +
                    Number(obj.agility) !==
                10
            )
                throw new ValidationError('Suma punktów wojownika musi wynosić 10');

            await pool.execute(
                'INSERT INTO `warriors`(`id`, `name`, `power`, `defense`, `resistance`, `agility`) VALUES(:id, :name, :power, :defense, :resistance, :agility)',
                {
                    id,
                    name: obj.name,
                    power: obj.power,
                    defense: obj.defense,
                    resistance: obj.resistance,
                    agility: obj.agility,
                },
            );

            return {
                id,
                name: obj.name,
                power: obj.power,
                defense: obj.defense,
                resistance: obj.resistance,
                agility: obj.agility,
            };
        } catch (err: any) {
            console.log(err);

            if (err.code === 'ER_DUP_ENTRY')
                return { error: 'Wojownik o tym imieniu już istnieje' };
            if (err instanceof ValidationError) return { error: err.message };

            return { error: err };
        }
    }
}
