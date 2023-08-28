var form = document.getElementById('addform');
var itemlist = document.getElementById('ul');

form.addEventListener('submit', addItem);




function addItem(e) {
    e.preventDefault();

    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;
    var number1 = document.getElementById('number').value;

let obj = {}
obj.property1 = name1;
obj.property2 = email1;
obj.property3 = number1;

let mergedText=obj.property1+' '+obj.property2+' '+obj.property3;
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
  

axios.post("https://crudcrud.com/api/d16bf43cc04e4385a8dd4a5d9b9e7c4a/sai", obj)
.then((resolve)=>{
    console.log(resolve)
})
.then((reject)=>{
    console.log(reject)
})

}

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/d16bf43cc04e4385a8dd4a5d9b9e7c4a/sai")
    .then((resolve)=>{
        
        for(var i=0;i<resolve.data.length;i++)
        {
            showuserOn(resolve.data[i])
        }
    })
    .then((reject)=>{
        console.log(reject)
    })
    
})

   
    // localStorage.setItem(email1, mergedText)


function showuserOn(user){
    var name1 = document.getElementById('name').value=''
    var email1 = document.getElementById('email').value=''
    var number1 = document.getElementById('number').value=''
console.log(user)
let obj = {}
obj.property1 = user.property1
obj.property2 = user.property2
obj.property3 = user.property3

let mergedText=obj.property1+' '+obj.property2+' '+obj.property3;
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
}
if(itemlist.length<0)
{
    showuserOn()
}