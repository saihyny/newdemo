// var headerTitle= document.getElementById("main-header");
// var header = document.getElementById("header-title");
// headerTitle.textContent="hello"
// header.style.borderBottom = "solid 3px #000";
// var item= document.querySelector('#items li:nth-child(5)')
// item.style.backgroundColor="green"
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}

var li=document.getElementsByTagName('li');
li[5].style.backgroundColor='yellow';