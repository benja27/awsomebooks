export default function AddNewBook(e, books) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = {
    title,
    author,
  };
  books.push(newBook);
  localStorage.setItem('collection', JSON.stringify(books));

  return books;
}
