import { WarriorRecord } from '../records/warrior.record';

export const fightLog = (warrior1: WarriorRecord, warrior2: WarriorRecord) => {
    //     Algorytm walki (można go zmodyfikować, to tylko propozycja):
    // 1. Każdy na początku ma tyle punktów życia (HP) ile wynosi jego wytrzymałość * 10. Każdy ma na oczątku tyle tarczy (DP) ile wynosi jego obrona.
    // 2. Wojownik, który zaczyna wykonuje atak o wartości równej jego sile
    // 3. Jeżeli wojownik atakowany ma tarczę + zwinność większą niż siła ataku, to:
    // 	3.1. Odejmowane mu jest tarcza w wysokości ataku.
    // 		3.2.A) Jeżeli atak był większy niż tarcza, to odejmowana jest mu od życia pozostała ilość siły ataku.
    // 		3.2.B) Jeżeli atak był maksymalnie tyle ile wynosi aktualnie tarcza, to nie jest odejmowane życie.
    // 	3.2. Jeżeli warunek 3 NIE JEST SPEŁNIONY to po prostu od życia odejmujemy atak
    // 4. Następuje zmiana kolejności i teraz atakowany zostaje atakującym, a atakujacy zostaje atakowanym.
    // 5. Powtarzamy punkty 2 - 4 tak długo, dopóki ktoś nie umrze, czyli jego HP nie spadnie do min. 0. Gdy jeden z wojowników umrze, to atakujący zostaje zwycięzcą. Zapisujemy mu w bazie +1 do zwycięstw.
    // Podczas walki, powinien się generować dokładny log, który zostanie zwrócony na frontend. Powinien on zawierać szczegółowe informacje -kto kogo atakuje, czy powiodła się obrona, ile zostało zabrane z tarczy itp.

    const hp1 = warrior1.resistance * 10;
    const hp2 = warrior2.resistance * 10;

    const dp1 = warrior1.defense;
    const dp2 = warrior1.defense;

    return [
        { id: 1, message: `${warrior1.name} atakuje ${warrior2.name}` },
        { id: 2, message: 'log2' },
        { id: 3, message: 'log3' },
        { id: 4, message: 'log4' },
        { id: 5, message: 'log5' },
    ];
};
