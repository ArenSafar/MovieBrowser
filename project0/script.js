

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  let container = document.createElement('div')
  let input = document.createElement('input')
  let checkbox = document.createElement('input')
  let button = document.createElement('button')

  checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'todo-checkbox')
  checkbox.textContent = "checkbox"
  container.setAttribute('class', 'center ' + classNames.TODO_ITEM)

  var textlabel = document.createElement("Label");
  var checklabel = document.createElement("Label");

  checklabel.setAttribute("for",'todo-checkbox');
  checklabel.innerHTML = " checked ";


  input.setAttribute('class', classNames.TODO_TEXT)
  input.setAttribute('id', 'text-input')
  input.textContent = "message "

  textlabel.setAttribute("for",'text-input');
  textlabel.innerHTML = "what to do? ";
  container.appendChild(textlabel);

  button.setAttribute('class', 'button center')
  button.textContent = "submit"

  document.body.appendChild(container)
  container.appendChild(input)
  container.appendChild(checklabel)
  container.appendChild(checkbox)
  container.appendChild(button)

  button.addEventListener('click', function () {
    //save todo
    itemCountSpan.getc
    var todoMsg = document.getElementById('text-input').value;
    if (todoMsg.length > 0) {
      var isChecked = document.getElementById('todo-checkbox').checked;
      var entry = document.createElement('li');
      let checkMsg = (isChecked) ? 'checked' : 'pending!'
      itemCountSpan.textContent = (Number(itemCountSpan.textContent) + 1) + ""
      if (!isChecked) uncheckedCountSpan.textContent = (Number(uncheckedCountSpan.textContent) + 1) +""
      entry.appendChild(document.createTextNode(todoMsg + "\t" + checkMsg));
      list.appendChild(entry);
    }
    container.parentNode.removeChild(container)
  })


}

