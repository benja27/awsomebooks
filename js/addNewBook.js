export default function AddNewBook(e, books) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  
  if(!title || !author) return alert('please enter a tittle and a author')
  
  const newBook = {
    title,
    author,
  };

  const isrepeated = books.find(objeto => objeto.title === newBook.title && objeto.author === newBook.author );

  if (isrepeated) {
    return alert('that book is duplicated')
  } 

  books.push(newBook);

  localStorage.setItem('collection', JSON.stringify(books));

  return books;
}

