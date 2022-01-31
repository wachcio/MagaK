import { Warrior } from './warrior';

enum ActiveWarrior {
    First = 0,
    Second = 1,
}

export class Arena {
    activeWarrior: ActiveWarrior = ActiveWarrior.Second;
    constructor(private warrior1: Warrior, private warrior2: Warrior) {
        if (!(warrior1 instanceof Warrior)) {
            throw new Error('warrior1 must be an instance of Warrior class!');
        }

        if (!(warrior2 instanceof Warrior)) {
            throw new Error('warrior2 must be an instance of Warrior class!');
        }

        this.warrior1 = warrior1;
        this.warrior2 = warrior2;
        this.activeWarrior = 2;
    }

    fight(): Warrior | null {
        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;

        const attackingHitPoints = attacker.getHitPoints();
        const attackedOldHp = attacked.getHp();
        const attackedNewHp = attackedOldHp - attackingHitPoints;

        console.log(
            attacker.getName(),
            'is attacking',
            attacked.getName(),
            'and how he has',
            attackedNewHp,
            'hp',
        );

        attacked.setHp(attackedNewHp);

        this.activeWarrior =
            this.activeWarrior === ActiveWarrior.First ? ActiveWarrior.Second : ActiveWarrior.First;
        /**
        if (this.activeWarrior === 1) {
          this.activeWarrior = 2;
        } else {
          this.activeWarrior = 1;
        }
       */

        if (attackedNewHp <= 0) {
            console.log(attacked.getName(), 'goes to Valhalla');
            return attacker;
        }

        return null;
    }
}
