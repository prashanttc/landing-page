const api_url = "https://api.quotable.io/random";
const quote = document.querySelector(".mainquote");
const author = document.querySelector(".author");
const next = document.getElementById("next");
const copybtn = document.getElementById("copy");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML ="~  " + data.author;
    console.log(data);
}

next.addEventListener("click" , function(){getquote(api_url) });
copybtn.addEventListener("click", function(){
    copyquote();
})



function copyquote(){
    var content = quote.textContent;
    navigator.clipboard.writeText(content).then(function(){
        alert("copied quote");}).catch(function(error){
            console.error('could not copy text' , error);
        });
    };
