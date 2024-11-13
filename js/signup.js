const name=document.getElementById("name")
const email=document.getElementById("email")
const password=document.getElementById("password")
const form=document.getElementById("form")
const name_error=document.getElementById("error")
const pass_error=document.getElementById("pass-error")

form.addEventListener("submit",(event)=>{
    if(name.value ===""||name.value == null){
        event.preventDefault()
        name_error.innerHTML ="Name is requide"
    }
    else{
        name_error.innerHTML =" " 
    }
    if (email.value.match(email-check)){

    }

    if (password.value.length <=5){
     event.preventDefault()
     pass_error.innerHTML = "password must be more than 6 characters"
    }
    if (password.value.length === "password"){
        event.preventDefault()
        pass_error.innerHTML = "password must be less than 20 characters"
       }
    else{
             pass_error = ""
    }
})