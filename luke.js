var itemList = document.getElementById('list-group');
var form = document.getElementById('addForm');

form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();

    var name2 = document.getElementById('username').value;
    var number = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var mergedText = name2 + "-" + number + "-" + email;

    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(mergedText));
    itemList.appendChild(li);

    document.getElementById("username").value="";
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";

    localStorage.setItem(email,mergedText);
    
}
