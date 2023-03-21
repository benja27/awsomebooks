import AddNewBook from './addNewBook.js';
import removeBook from './removeBook.js';
import showBooks from './showbooks.js';

let collectionOfBooks = JSON.parse(localStorage.getItem('collection'));

document.addEventListener('DOMContentLoaded', () => {
  showBooks(collectionOfBooks);
});

document.querySelector('.bookListCont').addEventListener('click', (e) => {
  collectionOfBooks = removeBook(e, collectionOfBooks);
  showBooks(collectionOfBooks);
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  AddNewBook(e, collectionOfBooks);
  showBooks(collectionOfBooks);
});
