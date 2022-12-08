function addElement() {
    let element = document.querySelector("#element");
    let container = document.querySelector(".list-body");


    let newElement = document.createElement("p");
    newElement.className = "element-liste";
    
    newElement.innerText = element.value;
    
    container.appendChild(newElement);

    let deleteElement = document.createElement("span");
    deleteElement.className = "delete";
    deleteElement.innerText = "delete";
    newElement.appendChild(deleteElement);

    deleteElement.addEventListener("click" , function() {
        container.removeChild(newElement);
    })
}