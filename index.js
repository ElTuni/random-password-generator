const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let mode = "dark"


function createPassword(){
    let password1 = ""
    let password2 = ""
    for (let i = 0; i <15; i++){
        password1 += characters[randomNum()]
        password2 += characters[randomNum()]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}

function randomNum(){
    random = Math.floor(Math.random()*characters.length)
    return random
}

function modeonoff() {
    if (mode === "dark"){
        document.getElementById("box").style.backgroundColor = "#ECFDF5"
        document.body.style.backgroundColor = "#ECFDF5"
        document.getElementById("heading1").style.color = "#2b283a"
        document.getElementById("subtitle").style.color = "#6b7280"
        mode = "day"
    } else if (mode === "day"){
        document.getElementById("box").style.backgroundColor = "#1F2937"
        document.body.style.backgroundColor = "#1F2937"
        document.getElementById("heading1").style.color = "white"
        document.getElementById("subtitle").style.color = "d5d4d8"
        mode = "dark"
    }
}