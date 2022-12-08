let buttons = document.querySelectorAll(".container button");
let block = document.querySelector(".block-wrapper")
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnClass = btn.className;
        block.classList.add(btnClass)
        console.log(block)
        if(block === btnClass) {
            block.classList.remove(btnClass);
        }
    })
})