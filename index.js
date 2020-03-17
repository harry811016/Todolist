// init
let list = document.querySelector("#my-todo")
let done = document.querySelector("#done")
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
]
for (let todo of todos) {
  addItem(todo)
}

//addItem
function addItem(text) {
  let newItem = document.createElement("li")
  newItem.innerHTML = `
    <label for="todo" class="todoitem">${text}</label>
    <i class="edit fa fa-pencil"></i>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem)
}

// Click Create
const addBtn = document.querySelector("#addBtn")
addBtn.addEventListener("click", function(event) {
  let inputValue = document.querySelector("#newTodo").value
  if (inputValue !== "") {
    addItem(inputValue)
  }
})

// Enter Create
const newTodo = document.querySelector("#newTodo")
newTodo.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    let inputValue = document.querySelector("#newTodo").value
    if (inputValue !== "") {
      addItem(inputValue)
    }
  }
})

// Delete and check (Todo)
list.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === "LABEL") {
    let li = event.target.parentElement
    done.appendChild(li)
    event.target.classList.toggle("checked")
    event.target.nextElementSibling.classList.remove("fa-pencil")
    event.target.nextElementSibling.classList.toggle("fa-check")
  } else if (event.target.classList.contains("edit")) {
    let value = event.target.parentElement
    let text = value.firstElementChild.textContent
    let editItem = document.createElement("input")
    editItem.setAttribute("type", "text")
    editItem.setAttribute("placeholder", text)
    editItem.setAttribute("id", "editItem")
    value.firstElementChild.replaceWith(editItem)
    editItem.addEventListener("keypress", function(event) {
      if (event.key == "Enter") {
        let inputValue = document.querySelector("#editItem").value
        if (inputValue !== "") {
        let newItem = document.createElement("li")
        newItem.innerHTML = `
          <label for="todo">${inputValue}</label>
          <i class="edit fa fa-pencil"></i>
          <i class="delete fa fa-trash"></i>
        `
        value.replaceWith(newItem)
        }
      }
    })
    value.addEventListener("click", function(event) {
      if (event.target.classList.contains("edit")) {
        let inputValue = document.querySelector("#editItem").value
        if (inputValue !== "") {
        let newItem = document.createElement("li")
        newItem.innerHTML = `
          <label for="todo">${inputValue}</label>
          <i class="edit fa fa-pencil"></i>
          <i class="delete fa fa-trash"></i>
        `
        value.replaceWith(newItem)
        }
      }
    })
  }
})

// Delete and check (Done)
done.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === "LABEL") {
    let li = event.target.parentElement 
    list.appendChild(li)
    event.target.classList.toggle("checked")
    event.target.nextElementSibling.classList.remove("fa-check")
    event.target.nextElementSibling.classList.toggle("fa-pencil")
  }
})
