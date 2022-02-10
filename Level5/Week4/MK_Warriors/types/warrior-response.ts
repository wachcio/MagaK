import { FieldPacket } from 'mysql2';

export interface WarriorResponseOk {
    // id: string;
    name: string;
    power: number;
    defense: number;
    resistance: number;
    agility: number;
}
export interface WarriorResposeError {
    error: string;
}

export type WarriorsListResponse = [WarriorResponseOk[], FieldPacket[]];
export type WarriorResponse = WarriorResponseOk | WarriorResposeError;
