const obj = {
    id: 1,
    name: 'Testowy Testowy',
    pwdHash: 'd6f21c37249acad538d47502d99081aaf5fedff3625c62b0d451896839b04cf5',
    isAdmin: true,
    hasAvatar: true,
};
const filter = (obj) => {
    const { id, name, hasAvatar } = obj;
    return { id, name, hasAvatar };
};

console.log(filter(obj));
