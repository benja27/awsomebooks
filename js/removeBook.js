export default function removeBook(e, list) {  
  if (e.target.matches('.remove')) {
    
    let id = e.srcElement.getAttribute('data-id')
    
    let newCollectionOfBooks = list.filter( function (book,index) {       
      return id != index
    });
    list = newCollectionOfBooks    
    localStorage.setItem('collection', JSON.stringify(list));    
  }

  return list;
}