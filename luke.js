var newobj = 
{
    name:"daniel", 
    age:22
}
var convertString = JSON.stringify(newobj);

localStorage.setItem("newobj",convertString);
var getitem= localStorage.getItem("newobj");
console.log(getitem)
