interface PersonInfo {
    name: string;
    points: number;
}
const data: PersonInfo[] = [
    { name: 'Anna', points: 1000 },
    { name: 'Krzysztof', points: 500 },
    { name: 'Ola', points: 0 },
    { name: 'Marek', points: 1001 },
];
const incPoints = (obj: PersonInfo): number => {
    obj.points ?? 0;
    obj.points++;
    return obj.points;
};
const totalPoints = (ar: PersonInfo[]): number => {
    return ar.reduce((prev, curr) => prev + curr.points, 0); //rozwiązanie Kuby

    // let total = 0;
    // ar.map((v) => {
    //     total += v.points;
    // });
    // return total;
};
const personWithMostPoints = (ar: PersonInfo[]): PersonInfo | null => {
    if (ar.length === 0) {
        return null;
    }
    // return ar.reduce((prev, curr) => (prev.points < curr.points ? curr : prev)); //rozwiązanie Kuby

    return ar.sort((a, b) => b.points - a.points)[0]; //roawiązanie Kuby

    // let ownerMaxPoint: PersonInfo = { name: '', points: 0 };
    // ar.map((v) => {
    //     if (v.points > ownerMaxPoint.points) {
    //         ownerMaxPoint = v;
    //     }
    // });
    // return ownerMaxPoint;
};

console.log(incPoints(data[0]));

console.log(totalPoints(data));
console.log(personWithMostPoints(data));
