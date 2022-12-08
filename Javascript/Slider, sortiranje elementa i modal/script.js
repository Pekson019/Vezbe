let navBtn = document.querySelector(".nav button");
let navItems = document.querySelector(".nav .nav-links");
console.log(navItems)
navBtn.addEventListener("click" , () => {
    navItems.style.display = "block";
    navBtn.innerText = "CLOSE";
});

//slider 

let rightBtn = document.querySelector("#rightButton");
let leftBtn = document.querySelector("#leftButton");
let images = document.querySelectorAll(".slider-items img");
let imgNum = 0;

rightBtn.addEventListener("click", () => {
    displayNone(images);
    imgNum++;
    if(imgNum === images.length) {
        imgNum = 0;
    }
    images[imgNum].style.display = "block";

});

leftBtn.addEventListener("click", () => {
    displayNone(images);
    imgNum--;
    if(imgNum == -1) {
        imgNum = images.length - 1;
    }
    images[imgNum].style.display = "block";

})

const displayNone = (elements) => {
    elements.forEach((img)  => {
        img.style.display = "none";
    }) 
}

// elementi 

const sortiraj = (element) => {
    let category = element.getAttribute("data-category");
    let stvari = document.querySelectorAll(".elements-content-wrapper");
    stvari.forEach((item)=> {
        item.style.display = "none";
    })
    if(category == "sve") {
        stvari.forEach((item) => {
            item.style.display = "block"
        })
    }
    stvari.forEach((item) => {
        if(item.getAttribute("data-category").includes(category) ) {
            item.style.display = "block";
        }
    })
}
// modal 

let modal = document.querySelector(".modal");
let popup = document.querySelector(".modal .popup");
let modalBtn = document.querySelector("#modalBtn");
modalBtn.addEventListener("click" , () => {
    modal.style.display = "block"
})