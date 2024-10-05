const getElement=document.getElementById("main")
if(getElement){
    getElement.remove()
}
 const newHeader=document.createElement("h1")

 newHeader.id="victory"

 const yourName = 'Luqman Bshir'; 
 newHeader.textContent = `${yourName} is the champion`;  


 document.body.appendChild(newHeader);  