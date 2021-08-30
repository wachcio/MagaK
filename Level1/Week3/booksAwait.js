const isbn = prompt('Podaj ISBN książki', '9788377915097');

(async () => {
    try {
        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error('Something went wrong', err);
    }
})();
