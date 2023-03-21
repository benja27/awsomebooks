export default function AddNewBook(e, books) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (!title || !author) {
    document.querySelector('.alert').innerHTML = 'enter a tittle and a author';
    return;
  }
  document.querySelector('.alert').innerHTML = '';

  const newBook = {
    title,
    author,
  };

  const isRepeat = books.find((e) => e.title === newBook.title && e.author === newBook.author);

  if (isRepeat) {
    document.querySelector('.alert').innerHTML = 'That book is duplicated';
    return;
  }

  document.querySelector('.alert').innerHTML = '';

  books.push(newBook);

  localStorage.setItem('collection', JSON.stringify(books));
}
