var farm = document.getElementById('addform')
var listgroup1 = document.getElementById('ul1')
var listgroup2 = document.getElementById('ul2')
var listusers = [];
farm.addEventListener('submit',additem);
function additem(e)
{
    e.preventDefault()

    var todoinput = document.getElementById('todoinput').value;
    var discriptioninput = document.getElementById('descriptioninput').value;

    let newuser = {
        name:todoinput,
        eamil:discriptioninput,
        flag:false
    }
    axios.post('https://retoolapi.dev/yWzgFX/data',newuser)
    .then(()=>{
        fetchusers()
    })
    .catch(()=> console.log("error from add item"))

}
function fetchusers(){
    axios.get('https://retoolapi.dev/yWzgFX/data')
    .then((resolve)=>{
        listusers=resolve.data;
       
        displayusers()
        
    })
    .catch(()=>console.log("error comes fetchinguser funtion"))
}


function displayusers(){

    listgroup1.innerHTML=""
    listgroup2.innerHTML=""

    listusers.forEach((user)=>
    {
        var mergedtext= user.name +' '+user.eamil;
        
         //  CREATE NEW LI ELEMENT
         var li = document.createElement('li');
         li.className = 'list-group-item';
         li.appendChild(document.createTextNode(mergedtext));
     

             //  CREATE DELETE BUTTON
         var deletebtn = document.createElement('button');
         deletebtn.className = 'btn btn-sm float-right delete';
         deletebtn.appendChild(document.createTextNode('Delete'));
         li.appendChild(deletebtn);

         
         var checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.className = 'checkbox float-right btn-sm';
       li.appendChild(checkbox)
        
        if(user.flag)
      {    
          listgroup2.appendChild(li);
      }
        else 
      {
       listgroup1.appendChild(li);
      }
     

      checkbox.addEventListener('change', (e) => {
        handleCheckboxChange(e, user.id);
      });
        deletebtn.addEventListener('click', (e) => {
            handleDelete(e, user.id);
        });
    
    });
    document.getElementById('todoinput').value=""
    document.getElementById('descriptioninput').value=""

}
window.addEventListener("DOMContentLoaded", () => {
    fetchusers();
});



function handleCheckboxChange(e, itemId) {
  
    const userIndex = listusers.findIndex(user=>user.id===itemId)
   
if(userIndex !== -1)
{ 
    const is ={
        flag:true
    }
   
    
    axios.patch(`https://retoolapi.dev/yWzgFX/data/${itemId}`,is).then(() => {
            
            
            fetchusers(); // Refresh the user list
            
        })
        .catch(() => {
            console.log("error comes from pust request");
        });
    }  
}
function handleDelete(e, itemId) {
    console.log(itemId)
    axios.delete(`https://retoolapi.dev/yWzgFX/data/${itemId}`)
        .then(() => {
            fetchusers();
        })
        .catch((error) => {
            console.log(error);
        });
}