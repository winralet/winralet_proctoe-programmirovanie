const dino=document.getElementById("dino")
const cactus=document.getElementById("cactus")
const score=document.getElementById('score')
let playScore=0
let scoreCounter=()=>{
   playScore++
   score.innerHTML=`Score <b>${playScore}</b>`
}
let interval=setInterval(scoreCounter,200)


document.addEventListener("keydown" ,(event)=>{
   jump()}
)
document.addEventListener("touchstart" ,(event)=>{
    jump()}
 )
 document.addEventListener("click" ,(event)=>{
    jump()}
 )
function jump() {
    if(dino.classList!="dinoJump")
   {dino.classList.add("dinoJump")}
   setTimeout(()=>{
    dino.classList.remove("dinoJump")},700
   )}

let death=setInterval(()=>{
let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

if (dinoTop >= 273 && cactusLeft > 0 &&cactusLeft < 30) {
    alert(`Game over! Ваш счёт: ${playScore} очков`)
    console.log(45)
playScore=0
}
},10
) 
