// var item = document.getElementsByClassName("list-group-item")
// item[2].style.backgroundColor = "green" ;
// for(var i=0;i<item.length;i++)
// {
//     item[i].style.fontWeight = 'bold';
// }
// var li=document.getElementsByTagName("li");
// li[4].style.backgroundColor="green";
// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.backgroundColor="green"
// var thirditem = document.querySelector(".list-group-item:nth-child(3)");
// thirditem.style.color = 'white';
// var secitem = document.querySelectorAll(".list-group-item:nth-child(2)");
// for(var i=0;i<secitem.length;i++)
// {
//     secitem[i].style.color="green"
// }
// var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="green"
// }

// let newdiv = document.createElement('div')
// newdiv.className='hello'
// newdiv.id="hello1";
// newdiv.setAttribute('title','hello div')
// let newtextnode = document.createTextNode('hello world');
// newdiv.appendChild(newtextnode);

// var container = document.querySelector("ul#items")
// var h1=document.querySelector("list-group-item:first-of-type")
// container.insertBefore(newdiv,h1)




var form = document.getElementById('addForm');
var itemList= document.getElementById('items')
 
// form submit event 
form.addEventListener('submit',addItem);

// delete event
itemList.addEventListener('click',removeItem);

// add item
function addItem(e){
    e.preventDefault();


    // get input value;
    let newItem=document.getElementById('item').value;

    // create new li element
    let li =document.createElement('li')

    // add class
    li.className='list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // create delete button element
    var deleteBtn=document.createElement('Button')
    
    // add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
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




















