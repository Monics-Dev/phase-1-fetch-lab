
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch ("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  return fetch('https://anapioficeandfire.com/api/books')

  .then(response => response.json())
  .then(books => renderBooks(books))


}

function renderBooks(books) {

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
}