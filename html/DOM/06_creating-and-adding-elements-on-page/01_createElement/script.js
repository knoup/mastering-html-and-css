// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Hello, Dev!"

// append prepend
const body = document.querySelector('body')

body.append(div)

body.prepend(div)