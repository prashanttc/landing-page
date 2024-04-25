const notescontainer = document.querySelector(".notes-container");
const button = document.getElementById("addnote"); 
const clearbutton = document.getElementById("clear");
let notes = document.querySelectorAll(".input");



button.addEventListener("click", ()=>                             // function to display note box
{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input";
    inputbox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    img.className = "delete";
    notescontainer.appendChild(inputbox).appendChild(img);
    updatestorage();

})

notescontainer.addEventListener("click", function(e){          
    if(e.target.tagName === "IMG"){                           // if click on delete then delete closest inputbox
        e.target.closest(".input").remove();
        updatestorage();
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {                                      // if click on p tag then update storage on every keyup
            nt.onkeyup = function(){
                updatestorage();
            }
        });
    }
})

clearbutton.addEventListener("click" ,clearstorage);              //clear button functionality
 

function updatestorage(){
    localStorage.setItem("notes" , notescontainer.innerHTML)    // storage update
}
function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");       // show stored data

} 

function clearstorage(){
    notes.forEach(note => {
        note.remove();
    });                                                            //  to clean storage
    localStorage.clear();
    notes = document.querySelectorAll(".input");
}

shownotes();