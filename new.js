
var form= document.getElementById('addform')
var itemlist = document.getElementById('ul')

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

var name1= document.getElementById('name').value
var email1= document.getElementById('email').value
var number1 = document.getElementById('number').value

var mergedtxt = name1+ " " + email1+ " " + number1;

var newli= document.createElement('li')
newli.className='list-group-item'
newli.appendChild(document.createTextNode(mergedtxt))
itemlist.appendChild(newli)


localStorage.setItem(name1,mergedtxt);





}  