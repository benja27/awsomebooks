export default function removeBook(e, list) {
  if (e.target.matches('.remove')) {
    const id = parseInt(e.srcElement.getAttribute('data-id'), 10);    
    const newCollectionOfBooks = list.filter((book, index) => id !== index);
    list = newCollectionOfBooks;
    localStorage.setItem('collection', JSON.stringify(list));
  }
  return list;
}