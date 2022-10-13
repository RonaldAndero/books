const titleInput = document.querySelector('#book_title')
const authorInput = document.querySelector('#author_name')
const isbnInput = document.querySelector('#isbn_code')


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
    
    // add chosen values to table
    cell1.innerHTML = titleInput.value
    cell2.innerHTML = authorInput.value
    cell3.innerHTML = isbnInput.value

    // clear input fields
    titleInput.value = ''
    authorInput.value = ''
    isbnInput.value = ''
    
  }