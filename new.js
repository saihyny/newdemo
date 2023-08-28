var form = document.getElementById('addform');
var itemlist = document.getElementById('ul');
var userList = []; // Maintain a list of users

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;
    var number1 = document.getElementById('number').value;
    let newUser = {
        name: name1,
        email: email1,
        number: number1
    };

    axios.post("https://crudcrud.com/api/5b896b1c10e64957b0813e6194f0f077/sai", newUser)
        .then((response) => {
            newUser._id = response.data._id; // Set the newly created user's _id
            userList.push(newUser); // Add user to the list
            showUsers(); // Refresh the user list
        })
        .catch((error) => {
            console.error(error);
        });

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/5b896b1c10e64957b0813e6194f0f077/sai")
        .then((resolve) => {
            userList = resolve.data; // Store the retrieved user list
            showUsers(); // Display users on page load
        })
        .catch((error) => {
            console.error(error);
        });
});

function showUsers() {
    itemlist.innerHTML = ""; // Clear existing list

    userList.forEach((user) => {
        var mergedText = user.name + ' ' + user.email + ' ' + user.number;

        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.setAttribute('data-id', user._id);
        li.appendChild(document.createTextNode(mergedText));

        var deletebtn = document.createElement('button');
        deletebtn.className = 'btn btn-sm float-right delete';
        deletebtn.appendChild(document.createTextNode('Delete'));

        
        var editbtn = document.createElement('button');
        editbtn.className = 'btn btn-sm float-right edit';
        editbtn.appendChild(document.createTextNode('edit'));

        li.appendChild(deletebtn);
        li.appendChild(editbtn);
        itemlist.appendChild(li);
        
    });
}

itemlist.addEventListener('click', removeOrEditItem);

async function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        var itemId = li.getAttribute('data-id');

        axios.delete(`https://crudcrud.com/api/5b896b1c10e64957b0813e6194f0f077/sai/${itemId}`)
            .then(() => {
                userList = userList.filter(user => user._id !== itemId); // Remove from local list
                showUsers(); // Refresh the user list
            })
            .catch((error) => {
                console.error(error);
            });

        }
    // Add code here for edit functionality if needed
    else if(e.target.classList.contains('edit')){
       
            nam= document.getElementById("name")
            ema= document.getElementById("email")
            num= document.getElementById("number") 
                nam.value=userList[0].name;
               ema.value=userList[0].email;
               num.value=userList[0].number;
       
        var li = e.target.parentElement;
         var itemId = li.getAttribute('data-id');

        axios.delete(`https://crudcrud.com/api/5b896b1c10e64957b0813e6194f0f077/sai/${itemId}`)
            .then(() => {
                userList = userList.filter(user => user._id !== itemId); // Remove from local list
                showUsers(); // Refresh the user list
            })
            .catch((error) => {
                console.error(error);
            });

    }
}

    

