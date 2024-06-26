const myLibrary = [];
let num = 0;
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
function addBookToLibrary(title, author, pages, isRead) {
  myLibrary[num] = new Book(title, author, pages);
  let addCard = document.createElement('div');
  addCard.classList.add('card');
  formContainer.appendChild(addCard);
  let div = document.createElement('div');
  div.classList.add('title-card','size');
  div.innerHTML = title;
  addCard.appendChild(div);
  div = document.createElement('div');
  div.classList.add('author-card','size');
  div.innerHTML = author;
  addCard.appendChild(div);
  div = document.createElement('div');
  div.classList.add('pages-card','size');
  div.innerHTML = pages;
  addCard.appendChild(div);
  div = document.createElement('button');
  div.classList.add('status','card-button');
  if(isRead.checked){
    div.innerHTML = 'Read';
    div.classList.add('read');
  }
  else {
    div.innerHTML = 'Not read';
    div.classList.add('not-read');
  }
  addCard.appendChild(div);
  div = document.createElement('button');
  div.classList.add('remove','card-button');
  div.innerHTML = 'Remove';
  addCard.appendChild(div);
}
let title;
let author;
let pages;
let isRead;
let btn = document.getElementById('submit');
let formContainer = document.querySelector('.grid-container');

btn.addEventListener('click', () => {
  event.preventDefault();
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  isRead = document.getElementById('is-read');
  if(pages > 0 && pages <= 1500){
  addBookToLibrary(title, author, pages, isRead);
  card.classList.remove('show');
  num++;
  }
});
let addBook = document.querySelector('.add-book');
let card = document.querySelector('.open');
addBook.addEventListener('click', () => {
  card.classList.add('show');
});
let statusButtons = document.querySelectorAll('.status');
document.querySelectorAll('.status').forEach(item => {
  item.addEventListener('click', () => {
  if(item.innerHTML === 'Not read'){
    item.classList.remove('not-read');
    item.innerHTML = 'Read';
    item.classList.add('read');
  }
  else { 
    item.classList.remove('read');
  item.innerHTML = 'Not read';
  item.classList.add('not-read');
}
});})
