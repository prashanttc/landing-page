const api_url = "https://api.quotable.io/random";
const quote = document.querySelector(".mainquote");
const author = document.querySelector(".author");
const next = document.getElementById("next");
const copybtn = document.getElementById("copy");
const toastbox = document.querySelector(".toastbox");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML ="~  " + data.author;
    console.log(data);
}

function copyquote(){
    var content1 = quote.textContent;
    var content2 = author.textContent;
    var contentmix = content1 + '\n' + content2;
    navigator.clipboard.writeText(contentmix).catch(function(error){
            console.error('could not copy text' , error);
        });
    };

next.addEventListener("click" , function(){
    getquote(api_url)
    messagepopup(newquote); 
});
copybtn.addEventListener("click", function(){
    copyquote();
    messagepopup(success);
})

const success = '<i class="fa-solid fa-circle-check"></i> Successfully Copied!!';
const newquote = '<i class="fa-solid fa-circle-check"></i> Next Quote!!';


function messagepopup(msg){
let message = document.createElement("div");
    message.classList.add('popup');
    message.innerHTML = msg;
    toastbox.appendChild(message);
    setTimeout(function(){
      message.remove();
    }, 3000)
}


