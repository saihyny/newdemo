const form = document.getElementById("addForm")
const itemlist = document.getElementById("list-group")


form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeOrEditItem);

function addItem(e) {
    e.preventDefault();

    var name1 = document.getElementById('username').value;
    var email1 = document.getElementById('discription').value;
    var number1 = document.getElementById('catagory').value;

    var mergedText = name1 + " " + email1 + " " + number1;

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

    document.getElementById("username").value = "";
   
    document.getElementById("discription").value = "";
   
    localStorage.setItem(email1, mergedText)
}

// Remove item
function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
        var mergedText = li.firstChild.nodeValue;
        var emailPart = mergedText.split('-')[2];
        if (emailPart) {
            var email = emailPart.trim();
            localStorage.removeItem(email);
            
   
        }
    } else if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        var mergedText = li.firstChild.nodeValue;
        var email = mergedText.split(' ')[1]; // Assuming mergedText is "name email number"
    
        var nameInput = document.getElementById('username');
        var numInput = document.getElementById('catagory');
        var emailInput = document.getElementById('discription');
    
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




