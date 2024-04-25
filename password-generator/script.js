const passbox = document.getElementById("input-box")
const length = 12;


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol = "!@#$%";
const allchar = uppercase + lowercase + symbol + number;

function passwordgen(){

let password = '';
while(length>password.length){
    password += allchar[Math.floor(Math.random() * allchar.length)]
}
  passbox.value = password;
}
