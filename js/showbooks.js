export default function showBooks(books) {
  const container = document.querySelector('.bookListCont');

  container.innerHTML = '';

  books.forEach((element) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="fw-bold" >${element.title}</p>
    <p class="fw-bold" >${element.author}</p>
    <button class='remove' data-name=${element.title} >Remove</button>
    <hr class="border border-3 border-dark" >`;
    container.appendChild(div);
  });
}