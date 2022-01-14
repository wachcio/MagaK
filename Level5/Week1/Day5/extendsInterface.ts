interface Human {
    name: string;
    age: number;
}

interface HumanWithRole extends Human {
    role: string;
}
class User2 implements Human, HumanWithRole {
    role: string;
    name: string;
    surname: string;
    age: number;
}
