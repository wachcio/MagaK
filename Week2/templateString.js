const name = 'Smbd Test';
const age = 35;
const role = 'Admin';

const info = `${name} has role of ${role} and is born in year ${
    new Date().getFullYear() - age
}`;
console.log(info);
