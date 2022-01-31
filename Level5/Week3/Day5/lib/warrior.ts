import { WarriorInterface } from '../types/index';

export class Warrior implements WarriorInterface {
    constructor(
        public name: WarriorInterface['name'],
        public hitPoints: WarriorInterface['hitPoints'],
        public hp: WarriorInterface['hp'],
    ) {}

    setHp(hp: number): void {
        this.hp = hp;
    }

    getHp(): number {
        return this.hp;
    }

    getHitPoints(): number {
        return this.hitPoints;
    }

    getName(): string {
        return this.name;
    }

    levelUp(): void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}
