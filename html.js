// var headerTitle= document.getElementById("main-header");
// var header = document.getElementById("header-title");
// headerTitle.textContent="hello"
// header.style.borderBottom = "solid 3px #000";
// var item= document.querySelector('#items li:nth-child(5)')
// item.style.backgroundColor="green"
// var items = document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }

// var li=document.getElementsByTagName('li');
// li[5].style.backgroundColor='yellow';

// query selctor
// var second = document.querySelector('.list-group-item:nth-child(2)');
// second.style.backgroundColor='green'
// var third = document.querySelector('.list-group-item:nth-child(3)')
// third.style.color='white'

// // querySelector all
// var sec= document.querySelectorAll('.list-group-item');

// sec[1].style.color = 'green';
// var odd= document.querySelectorAll('.list-group-item:nth-child(odd)');

// for(var i=0;i<sec.length;i++)
// {
//     odd[i].style.backgroundColor='green'
// }
var itemlist= document.querySelector('#items')

// PARENT NODE
// console.log(itemlist);
// itemlist.parentNode.style.backgroundColor='blue';
// console.log(itemlist.parentNode.parentNode);

// CHILD NODE
// console.log(itemlist.children)
// console.log(itemlist.children[0])
// itemlist.children[0].style.backgroundColor='green';

// NEXT SIBILING and NEXT ELEMENT SIBILING
// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)
// itemlist.nextElementSibling.style.backgroundColor='green'

// PREVIOUS SIBILING and PRIVIOUS ELEMENT SIBILING
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.backgroundColor='green'

// CREATE NEW ELEMENT

// CREATE NEW DIV
 let newDiv = document.createElement('div');

// ADD CLASS
newDiv.className= 'hello'

// ADD ID
newDiv.id='hello1'

// ADD ATTRIBUTES
newDiv.setAttribute('title','hello div')

// CREATE TEXGT NODE
var newDivtext = document.createTextNode('hello world')

// Add TEXT  TO DIV
newDiv.appendChild(newDivtext);


// CREATE NEW DIV
let newDiv2 = document.createElement('div');

// ADD CLASS
newDiv2.className= 'hello'

// ADD ID
newDiv2.id='hello1'

// ADD ATTRIBUTES
newDiv2.setAttribute('title','hello div')

// CREATE TEXGT NODE
var newDivtext = document.createTextNode('hello world')

// Add TEXT  TO DIV
newDiv2.appendChild(newDivtext);

//   MERGE DIV TO HTML CODE

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
container.insertBefore(newDiv,h1);

//   MERGE DIV TO HTML CODE

var item2 = document.querySelector('.title')
var item1 = document.querySelector('.list-group-item:nth-child(0)')
 item2.insertBefore(newDiv2,item1);

