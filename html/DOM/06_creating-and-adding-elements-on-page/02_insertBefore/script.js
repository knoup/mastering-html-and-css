// Adicionando elementos
const div = document.createElement('div')
div.innerText = "Hello, Dev!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)