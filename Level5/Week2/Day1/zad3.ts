// Nie zmieniaj poniższego kodu OPRÓCZ dodawania odpowiednich typów
interface UserInfo {
    firstName: string;
}

class User implements UserInfo {
    firstName: string;
    constructor(name: string) {
        this.firstName = name;
    }
}

const json = '{"firstName":"Jan"}';
const { firstName } = JSON.parse(json) as User;
let user: string | User = firstName === '' ? '' : `User ${firstName}`;

if (user !== '') {
    user = new User(user);
}

console.log(user);
