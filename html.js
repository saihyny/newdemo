// var item = document.getElementsByClassName("list-group-item")
// item[2].style.backgroundColor = "green" ;
// for(var i=0;i<item.length;i++)
// {
//     item[i].style.fontWeight = 'bold';
// }
// var li=document.getElementsByTagName("li");
// li[4].style.backgroundColor="green";
// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.backgroundColor="green"
var thirditem = document.querySelector(".list-group-item:nth-child(3)");
thirditem.style.color = 'white';
var secitem = document.querySelectorAll(".list-group-item:nth-child(2)");
for(var i=0;i<secitem.length;i++)
{
    secitem[i].style.color="green"
}
var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"
}