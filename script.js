let form = document.querySelector("#form");
let input = document.querySelector("#input");
let notif = document.querySelector("#notif");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

input.addEventListener("keydown", (e)=>{
    if(input.value.match(pattern)){
        form.classList.remove("invalid");
        form.classList.add("valid");
        notif.innerHTML = "Your Email Address is Valid";
        notif.style.color = "#00ff00";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        notif.innerHTML = "Please Enter a Valid Email Address";
        notif.style.color = "#ff0000"

    }
    setInterval(()=>{
        if(input.value == ""){
            form.classList.remove("valid");
            form.classList.remove("invalid");
            notif.innerHTML = "";
        }
    })
})