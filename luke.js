var itemList = document.getElementById('list-group');
var form = document.getElementById('addForm');

form.addEventListener("submit", addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    var name2 = document.getElementById('username').value;
    var number = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var mergedText = name2 + "-" + number + "-" + email;

    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(mergedText));
   

    var deleteBtn = document.createElement("button")
    deleteBtn.className = " btn btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('delete'))
    li.appendChild(deleteBtn)

    itemList.appendChild(li);

    document.getElementById("username").value="";
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";

    localStorage.setItem(email,mergedText);
    
}
// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        // Retrieve the email from the mergedText
      var mergedText = li.firstChild.nodeValue;
      var email = mergedText.split('-')[2].trim();
      localStorage.removeItem(email);
      }
    }
  }
