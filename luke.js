var itemList = document.getElementById('list-group');
var form = document.getElementById('addForm');

form.addEventListener("submit", addItem);
itemList.addEventListener('click', removeOrEditItem);

function addItem(e) {
    e.preventDefault();

    var name2 = document.getElementById('username').value;
    var number = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var mergedText = name2 + "-" + number + "-" + email;

    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(mergedText));

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);

    itemList.appendChild(li);

    document.getElementById("username").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";

    localStorage.setItem(email, mergedText);
}

function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
      
            var li = e.target.parentElement;
            itemList.removeChild(li);
            var mergedText = li.firstChild.nodeValue;
            var email = mergedText.split('-')[2].trim();
            localStorage.removeItem(email);
        
    } else if (e.target.classList.contains('edit')) {
        
            var li = e.target.parentElement;
            var mergedText = li.firstChild.nodeValue;
            var email = mergedText.split('-')[2].trim();

            var nameInput = document.getElementById('username');
            var numInput = document.getElementById('mobile');
            var emailInput = document.getElementById('email');

            nameInput.value = mergedText.split('-')[0].trim();
            numInput.value = mergedText.split('-')[1].trim();
            emailInput.value = email;

            itemList.removeChild(li);
            localStorage.removeItem(email);
        }
    }



