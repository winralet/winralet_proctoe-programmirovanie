const modal1 = document.querySelector('#modal1')
const content1 = document.querySelector('#content1')
const backdrop1= document.querySelector('#backdrop1')

content1.addEventListener('click', openCard1)
backdrop1.addEventListener('click', closeModal1)


function openCard1() {
    modal1.classList.add('open')
}

function closeModal1(){
    modal1.classList.remove('open')
}




const modal2 = document.querySelector('#modal2')
const content2 = document.querySelector('#content2')
const backdrop2 = document.querySelector('#backdrop2')

content2.addEventListener('click', openCard2)
backdrop2.addEventListener('click', closeModal2)


function openCard2() {
    modal2.classList.add('open')
}

function closeModal2() {
    modal2.classList.remove('open')
}