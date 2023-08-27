var form = document.getElementById('addform');
var itemlist = document.getElementById('ul');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeOrEditItem);

function addItem(e) {
    e.preventDefault();

    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;
    var number1 = document.getElementById('number').value;

var obj = {}
obj.property1 = name1;
obj.property2 = email1;
obj.property3 = number1;

var mergedText=obj.property1+ +obj.property2+ +obj.property3
          //  CREATE NEW LI ELEMENT
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(mergedText));

        //  CREATE DELETE BUTTON
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('Delete'));

        // CREATE EDIT BUTTON
    var editbtn= document.createElement('button')
    editbtn.className = 'btn btn-sm float-right edit'
    editbtn.appendChild(document.createTextNode('edit'))

        // APPEND DELETE BUTTONs INTO LI
    li.appendChild(deletebtn);
    li.appendChild(editbtn)
    itemlist.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
  

axios.post("https://crudcrud.com/api/67460808a5974bd38b6fb36e4bed6f54/sharpner", obj)
.then((respone)=>{
   
})
.catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4> somthing went wrong</h4>"
    console.log(err)
})
    
   
    // localStorage.setItem(email1, mergedText)
}

// Remove item
function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
       
      
    } else if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        var mergedText = li.firstChild.nodeValue;
        var email = mergedText.split(' ')[1]; // Assuming mergedText is "name email number"
    
        var nameInput = document.getElementById('name');
        var numInput = document.getElementById('number');
        var emailInput = document.getElementById('email');
    
        var parts = mergedText.split(' ');
        nameInput.value = parts[0].trim();
        numInput.value = parts[2].trim();
        emailInput.value = email;
    
        // Optionally, you can remove the item from the list and Local Storage
        // and allow the user to re-add the edited item.
        itemlist.removeChild(li);
        localStorage.removeItem(email);
    }
    
}



