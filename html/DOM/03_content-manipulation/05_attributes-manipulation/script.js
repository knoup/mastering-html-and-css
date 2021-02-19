// Manipulando conteúdo
// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'blog-header')

const headerID = document.querySelector('#blog-header')

console.log(headerID.getAttribute('id'))

header.removeAttribute('id')