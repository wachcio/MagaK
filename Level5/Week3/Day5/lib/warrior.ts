import { WarriorInterface } from '../types/index';

export class Warrior implements WarriorInterface {
    constructor(
        public name: WarriorInterface['name'],
        public hitPoints: WarriorInterface['hitPoints'],
        public hp: WarriorInterface['hp'],
    ) {}

    setHp(hp: number) {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }

    getHitPoints() {
        return this.hitPoints;
    }

    getName() {
        return this.name;
    }

    levelUp() {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}
