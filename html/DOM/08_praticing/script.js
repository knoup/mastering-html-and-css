const modalWrapper = document.querySelector('.modal-wrapper')
const openModalButton = document.getElementById('openModal')

openModalButton.onclick = () => {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', (event) => {
    const isEscKey = event.key === 'Escape' 

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})




