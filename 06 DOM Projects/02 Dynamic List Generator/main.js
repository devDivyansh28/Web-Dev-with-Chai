// const input = document.getElementById("itemInput");

const getinput = document.getElementById("itemInput");

const addBtn = document.getElementById("addBtn")

const itemList = document.getElementById("list")

addBtn.addEventListener('click',()=>{

    if(getinput.value.trim().length!==0){
    
    const li = document.createElement("li");

    let span = document.createElement("span")
    span.textContent = getinput.value
    li.append(span)
    
    

    const btnDiv = document.createElement("div")

    const editBtn = document.createElement("button")

    btnDiv.classList.add("btnDivison")

    editBtn.classList.add("edit")

    editBtn.textContent="Edit"
    btnDiv.appendChild(editBtn)
    const delButton = document.createElement("button");
    delButton.textContent="Delete"
    delButton.classList.add("delete");
    btnDiv.appendChild(delButton);
    li.appendChild(btnDiv)
    itemList.appendChild(li);

    delButton.addEventListener("click", () => {
      li.remove(); // we can also Use itemList.removeChild(li)
    });
    

    function changeData() {
      const editData = document.createElement("div");

      editData.classList.add("input-box");

      const editText = document.createElement("input");

      editText.value = span.textContent;

      editData.append(editText);

      const saveBtn = document.createElement("button");

      saveBtn.textContent = "Save";
      editBtn.replaceWith(saveBtn);
      editData.append(btnDiv);

      saveBtn.addEventListener("click", () => {
        span.innerText = editText.value;
        saveBtn.replaceWith(editBtn);
        li.append(btnDiv);
        editData.replaceWith(li);
      });

      itemList.replaceChild(editData, li);

      getinput.value = "";
    }
     
    li.addEventListener('dblclick',changeData)

    editBtn.addEventListener('click',changeData)



     getinput.value="";
    
    }


    

     // Version 1
    // if(input.value.trim().length!==0){
    //     itemList.innerHTML += `<li>${input.value}</li>`
    // }
    
})

// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("list");

// addBtn.addEventListener("click", () => {
//   if (input.value === "") {
//     alert("Mat kr lala!");
//     return;
//   }

//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   delBtn.textContent = "Delete";
//   delBtn.classList.add("delete");

//   li.textContent = input.value;

//   delBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   li.appendChild(delBtn);
//   list.appendChild(li);

//   input.value = "";
// });
