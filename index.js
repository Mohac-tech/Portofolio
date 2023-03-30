const box = document.querySelectorAll(".card");
 
box.forEach((boxItem) => {
    boxItem.addEventListener("mouseover", () => {
        boxItem.style.transform = "scale(1.08)"
        boxItem.style.transition = "transform 0.3s"
        boxItem.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    })
}
)

box.forEach((boxItem) => {
    boxItem.addEventListener("mouseleave", () => {
        boxItem.style.transform = "scale(1)"
        boxItem.style.boxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    })
}
)
