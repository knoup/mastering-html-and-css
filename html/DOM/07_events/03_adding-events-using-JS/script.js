// Eventos

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)



const h2 = document.querySelector(h2)

h2.onclick = print

function print() {
    console.log('print')
}

// Agumento event
const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event.currentTarget)
}