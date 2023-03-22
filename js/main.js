// import AddNewBook from './addNewBook.js';
// import removeBook from './removeBook.js';
// import showBooks from './showbooks.js';
// import {} from './classes.js';

// let collectionOfBooks = JSON.parse(localStorage.getItem('collection')) || [];

// document.addEventListener('DOMContentLoaded', () => {
//   showBooks(collectionOfBooks);  
// });

// document.querySelector('.bookListCont').addEventListener('click', (e) => {
//   collectionOfBooks = removeBook(e, collectionOfBooks);
//   showBooks(collectionOfBooks);
// });

// document.getElementById('form').addEventListener('submit', (e) => {
//   e.preventDefault();  
//   AddNewBook(e, collectionOfBooks);  
//   showBooks(collectionOfBooks);
// });



//------------------------------------------------------> class awsome books 

class mainBooks{
  constructor(){


    //------------------------------------------ VARIABLES
    this.collection = [],
    this.title = document.getElementById('title')
    this.author = document.getElementById('author')
    this.submit = document.getElementById('form')
    this.container = document.querySelector('.bookListCont')

    this.displayBooks()

    //------------------------------------------- EVENTS
    this.submit.addEventListener('submit',e=>{
      e.preventDefault()
      // alert(123)
      this.addBook()
    })

    this.container.addEventListener('click', e=>{
      if(e.target.classList.contains('remove')){
        let index = e.target.dataset.id
        this.removeBook(index)
      }
    });

  } 

  // FUNCTIONS

  addBook(){      
    const title = this.title.value
    let author = this.author.value

    this.collection.push({title, author})
    localStorage.setItem('collection',JSON.stringify(this.collection))
    this.displayBooks()
  
};

  displayBooks(){
    this.container.innerHTML= ''
    this.collection.forEach((element,index) => {        
      const div = document.createElement('div');
      div.className='book'        
      let textContent = document.createElement('p')
      textContent.className = "fs-bold m-0"
      textContent.textContent = `${element.title} by ${element.author}`
      let button = document.createElement('button')
      button.textContent= 'remove'
      button.className = 'remove'
      button.setAttribute('data-id',`${index}`)
      div.append(textContent, button)
      this.container.appendChild(div)      
      // this.container.appendChild(document.createElement('hr'))
    });
  }
    removeBook(index){
      this.collection.splice(index,1)
      localStorage.setItem('collection',JSON.stringify(this.collection))
      this.displayBooks()
    }
}

let library = new mainBooks()

if(localStorage.getItem('collection')){
  library.collection = JSON.parse(localStorage.getItem('collection'))
  library.displayBooks()
}