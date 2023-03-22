let arr = []

export  class Books{  
 add(book){
  arr.push(book)
 }

 
}

 export let library = new Books()


export class book{
  constructor(title, autor){
    this.title= title,
    this.author = autor
  }
}

let book1 = new book('title','author')
let book2 = new book('title2','author2')
let book3 = new book('title3','author3')

library.add(book1)
library.add(book2)
library.add(book3)




// console.log(library)

let id = 0


let newarr = arr.filter((book, index) => id !== index  )

console.log('arr',arr)
console.log('new arr',newarr)






// alert(JSON.stringify(book1))
// alert(JSON.stringify(arr))


