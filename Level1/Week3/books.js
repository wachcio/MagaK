const isbn = prompt('Podaj ISBN książki', '9788377915097');

const book = fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('Something went wrong', err));
