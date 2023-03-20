// import { hola as AddNewBook } from "./addNewBook.js";
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
document.addEventListener('DOMContentLoaded', e => {
  showBooks()
})
let fragment = document.createDocumentFragment()
document.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.matches('#submit')) {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let newBook = {
      title: title,
      author: author
    }
    collectionOfBooks.push(newBook)
    console.log(collectionOfBooks)
    showBooks()
  }
})
function showBooks() {
  let container = document.querySelector('.bookListCont')
  container.innerHTML = ``
  collectionOfBooks.forEach(element => {
    console.log(element)
    let div = document.createElement('div')
    div.innerHTML = `
    <p class="fw-bold" >${element.title}</p>
    <p class="fw-bold" >${element.author}</p>
    <button>Remove</button>
    <hr class="border border-3 border-dark" >`
    container.appendChild(div)
  });
}