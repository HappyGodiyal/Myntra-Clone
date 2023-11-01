let img = document.querySelector(".show img");
let details = document.querySelectorAll(".details");
let imgfull = document.querySelectorAll(".show")

imgfull.forEach((img,index)=>{
    img.addEventListener("mouseenter",()=>{
        details[index].style.display = "block";
    })
    img.addEventListener("mouseleave",()=>{
        details[index].style.display = "none";
    })
})

let image = document.querySelectorAll(".hero-bar1 img");
// let img2 = document.querySelector("#img2");
// let img3 = document.querySelector("#img3");
let box = document.querySelectorAll(".slider div");

let click = 0;
box.forEach((boxes,index)=>{
    boxes.addEventListener("click",()=>{
        image.forEach((img)=>{
            img.style.display = "none";
        })
        image[index].style.display = "block";
    })
})
