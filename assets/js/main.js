const boxEl = document.querySelector(".container")
const rightBtn = document.getElementById("btn-right")
const leftBtn = document.getElementById("btn-left")
const btnTop = document.getElementById("btn-top")
const btnBottom = document.getElementById("btn-bottom")
let numberLeft = 0;
let numberRight = 0;
let numberTop = 0;
let numberBottom = 0;
leftBtn.addEventListener('click', () => {
    numberLeft = numberLeft - 15
    boxEl.style.marginLeft = numberLeft + "px" 
    console.log("clicked");
})
rightBtn.addEventListener('click', () => {
    console.log("clicked");
    numberRight = numberRight + 15
    boxEl.style.marginLeft = numberRight + "px" 
})
btnBottom.addEventListener('click', () => {
    numberBottom = numberBottom + 15
boxEl.style.marginTop = numberBottom + "px"
boxEl.style.transform = "rotate(360deg)"
boxEl.classList.add("animation")

})
btnTop.addEventListener('click', () => {
    numberTop = numberTop + 15
    boxEl.style.marginBottom = numberTop + "px"
    boxEl.classList.add("animation")
})