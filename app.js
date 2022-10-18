const titleInput = document.querySelector('#book_title')
const authorInput = document.querySelector('#author_name')
const isbnInput = document.querySelector('#isbn_code')
const bookList = document.querySelector('tbody')
const delAllBooks = document.querySelector('#del_all')

bookList.addEventListener('click', deleteBook)
delAllBooks.addEventListener('click', deleteAllBooks)

function addBook() {
    // check if data is correct
    if(titleInput.value.length == 0){
        alert('Missing title!')
        return false
    } else if(authorInput.value.length == 0){
        alert('Missing author!')
        return false
    } else if(isbnInput.value.length == 0){
        alert('Missing ISBN!')
        return false
    }

    // add rows/cells
    var table = document.getElementById("books").getElementsByTagName('tbody')[0]
    var row = table.insertRow()
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    
    // create button
    const a = document.createElement('a')
    a.className = 'waves-effect waves-light btn green lighten-3'
    a.appendChild(document.createTextNode('X')) 

    // add chosen values to table
    cell1.innerHTML = titleInput.value
    cell2.innerHTML = authorInput.value
    cell3.innerHTML = isbnInput.value
    cell4.appendChild(a)
    
    // clear input fields
    titleInput.value = ''
    authorInput.value = ''
    isbnInput.value = ''
    
  }


function deleteBook(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this book?')){
            e.target.parentElement.parentElement.remove()
        }
    }
}

function deleteAllBooks(e){
    if(confirm('Are you sure to delete all books?')){
        while (bookList.firstChild){
            bookList.removeChild(bookList.firstChild)
        }
    }
}