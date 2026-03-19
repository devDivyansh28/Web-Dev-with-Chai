const btn = document.getElementById("toggleButton")

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    let text = btn.innerText;
    if(text.includes("Dark")){
        btn.innerText="Light Mode"
    }else{
        btn.innerText="Dark Mode"
    }
    

})

