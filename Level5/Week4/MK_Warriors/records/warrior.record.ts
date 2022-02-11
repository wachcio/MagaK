import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
// import { Warrior } from '../types/warrior';
import { FieldPacket, RowDataPacket } from 'mysql2';
import {
    WarriorResponse,
    WarriorResposeError,
    WarriorsListResponse,
} from '../types/warrior-response';

type WarriorRecordResult = [WarriorRecord[], FieldPacket[]];
export interface WarriorsToCheck {
    warrior1: string;
    warrior2: string;
}

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
                obj.agility < 1 ||
                obj.defense < 1 ||
                obj.power < 1 ||
                obj.resistance < 1 ||
                obj.agility > 7 ||
                obj.defense > 7 ||
                obj.power > 7 ||
                obj.resistance > 7
            )
                throw new ValidationError(
                    'Wartość siły, obrony, wytrzymałości i zwinności nie mogą być mniejsze od 1 i większe od 7',
                );
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
                // id,
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
    static async getAll(): Promise<RowDataPacket[] | WarriorResposeError> {
        try {
            const res = (await pool.execute(
                'SELECT `name`,`power`,`defense`,`resistance`,`agility` FROM `warriors` ORDER BY `warriors`.`name` ASC',
            )) as RowDataPacket[][];
            // console.log(res);

            if (res[0].length < 2) {
                // console.log(`${res[0].length} wojowników w bazie`);

                throw new ValidationError(
                    `W tym momencie w bazie jest ${res[0].length} wojownik/ów. Dodaj przynajmniej 2 wojowników aby kontunuować.`,
                );
            }
            return res[0];
        } catch (err: any) {
            console.log(err);

            if (err instanceof ValidationError) return { error: err.message };

            return { error: err };
        }
    }

    static async checkWarriors(
        obj: WarriorsToCheck,
    ): Promise<[RowDataPacket, RowDataPacket] | WarriorResposeError> {
        try {
            if (obj.warrior1 == obj.warrior2) {
                throw new ValidationError(`Wojownik nie może walczyć sam ze sobą.`);
            }
            const res1 = (await pool.execute(
                'SELECT * FROM `warriors` WHERE `name` LIKE :warrior1',
                {
                    warrior1: obj.warrior1,
                },
            )) as RowDataPacket[];
            const res2 = (await pool.execute(
                'SELECT * FROM `warriors` WHERE `name` LIKE :warrior2',
                {
                    warrior2: obj.warrior2,
                },
            )) as RowDataPacket[];
            return [res1[0], res2[0]];
        } catch (err: any) {
            console.log(err);

            if (err instanceof ValidationError) return { error: err.message };

            return { error: err };
        }
    }
}
