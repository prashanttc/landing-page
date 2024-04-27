const qrapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const box_3 = document.querySelector(".box3");
const error = document.querySelector("p");
let generatedimg;

function codegenerator() {
  const inputbox = document.getElementById("inputbox");
  const userinput = inputbox.value;
  if (userinput.length != 0) {
    const qrcode = qrapi + userinput;
    let scanner = document.createElement("img");
    scanner.className = "img";
    scanner.src = qrcode;
    error.style.display = "none";
    box_3.innerHTML = '';
    box_3.appendChild(scanner);
    generatedimg = scanner;
    inputbox.style.border = "1px solid black";
    inputbox.value = '';

  } 
  else {
    
if(generatedimg){
     generatedimg.style.display = "none";
 }  runerror();
 }

  
}
function runerror(){
    error.style.display = "block";
    error.style.animation = "shake 0.1s linear";
    inputbox.style.animation = " shake 0.1s linear";
    inputbox.style.border = "1px solid red";
    

    setTimeout(function(){
        inputbox.style.animation = "none";
        error.style.animation = "none";
    }, 500);
    animationcounter++;
}

document.getElementById("button").addEventListener("click", function(){
    codegenerator();
});