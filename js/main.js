import {AddNewBook} from "./addNewBook";

let collectionOfBooks = [
  {
    title: 'first book',
    author: 'name of the author'
  },
  {
    title: 'second book',
    author: 'name of the author'
  },
]

let fragment = document.createDocumentFragment()

collectionOfBooks.forEach(element => {
  console.log(element)
  
  let div = document.createElement('div')
  div.innerHTML = `
  <p class="fw-bold" >${element.title}</p>
  <p class="fw-bold" >${element.author}</p>
  <button>Remove</button>
  <hr class="border border-3 border-dark" >
  `  
  let container = document.querySelector('.bookListCont')
  container.appendChild(div)

});