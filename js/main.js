if(localStorage.getItem("contacts")== null)
    {
        localStorage.setItem("contacts",JSON.stringify([]));
    }
var tempIndex = -1;
viewData();


function addContact()
{
  var contact = getContact();
    var contacts = getDataFromLocalStorage();
    contacts.push(contact);
   updatedDataToLocalStorage(contacts);
   
    viewData();
}


function viewData(){

    var contacts = getDataFromLocalStorage();
    alert(contacts);
    var data =" ";
   if(contacts.length==0)
       {
           data = "contact not added"
       }else{
       data += "<table id='contacts'>"
       for(var i = 0;i < contacts.length;i++){
        
            data += "<tr>";
            data += "<td>" + contacts[i].name + "</td>";
            data += "<td>" + contacts[i].email + "</td>";
            data += "<td>" + contacts[i].moblie + "</td>";
            data += "<td><button onclick=deleteContact("+ i +")>deleteContact</button></td>"
            data += "<td><button onclick=editContact("+ i +")>editContact</button></td>"
            data += "</tr>";
       }
    data += "</table>";
       }
    document.getElementById("content").innerHTML=data;
}
function deleteContact(index)
{

    var contacts = getDataFromLocalStorage();
    contacts.splice(index,1);
    updatedDataToLocalStorage(contacts);
    viewData();
    
}
function editContact(index)
{
    var contacts = getDataFromLocalStorage();
    contact = contacts[index];
    tempIndex = index;
    document.getElementById("cname").value = contact.name;
    document.getElementById("email").value = contact.email;
     document.getElementById("moblie").value = contact.moblie;
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
    
    
}
function updateContact(){
    var contacts = getDataFromLocalStorage();
    
    contact = getContact();
    contacts.splice(tempIndex,1,contact);
    
     updatedDataToLocalStorage(contacts);
    
    clearFormData();
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
    viewData();
}
function clearFormData(){
   document.getElementById("cname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("moblie").value = '';  
}
function getContact()
{
    
 var cname = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var moblie = document.getElementById("moblie").value;
    contact = {
        "name" : cname,
        "email" : email,
        "moblie" : moblie
    };
    clearFormData();
return contact;
}
function getDataFromLocalStorage()
{
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts;
}
function updatedDataToLocalStorage(updatedData){
     localStorage.setItem("contacts" , JSON.stringify(updatedData));
}
