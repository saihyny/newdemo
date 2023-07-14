var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var newitem2 = document.getElementById('item2').value;
  
  // Merge input values
  var mergedText = newItem + ' ' + newitem2;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with merged input value
  li.appendChild(document.createTextNode(mergedText));

  // Create del,edit button element
  var deleteBtn = document.createElement('button');
  var editbtn = document.createElement('button');

  // Add classes to del,edit button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.className = "btn btn-edit btn-sm float-right";

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editbtn.appendChild(document.createTextNode('edit'));

  // Append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);

  // Append li to list
  itemList.appendChild(li);

   // get user details
   
   localStorage.setItem('item',mergedText);
   
  

  // Clear input fields
  document.getElementById('item').value = '';
  document.getElementById('item2').value = '';
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}



// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
