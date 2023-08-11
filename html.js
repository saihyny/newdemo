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
var second = document.querySelector('.list-group-item:nth-child(2)');
second.style.backgroundColor='green'
var third = document.querySelector('.list-group-item:nth-child(3)')
third.style.color='white'

// querySelector all
var sec= document.querySelectorAll('.list-group-item');

sec[1].style.color = 'green';
var odd= document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0;i<sec.length;i++)
{
    odd[i].style.backgroundColor='green'
}