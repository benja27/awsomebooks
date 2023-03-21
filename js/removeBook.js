export default function removeBook(e, list) {
  const newCollectionOfBooks = [];

  if (e.target.matches('.remove')) {
    const author = e.srcElement.previousElementSibling.textContent;

    const newCollectionOfBooks = list.filter((book) => book.author !== author);

    localStorage.setItem('collection', JSON.stringify(newCollectionOfBooks));
  }

  return newCollectionOfBooks;
}