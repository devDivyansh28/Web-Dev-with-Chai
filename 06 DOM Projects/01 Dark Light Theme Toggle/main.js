const btn = document.getElementById("toggleButton")

btn.addEventListener("click",()=>{
    let bodyClassList = document.body.classList
    bodyClassList.toggle("dark")
    
    bodyClassList.contains("dark") ? btn.innerHTML="Light Mode" : btn.innerText="Dark Mode"




    //*****Version 1*************/
    // let text = btn.innerText;
    // if(text.includes("Dark")){
    //     btn.innerText="Light Mode"
    // }else{
    //     btn.innerText="Dark Mode"
    // }
    

})

