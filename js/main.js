console.log ('adw')

let sendButton = document.querySelector('#send-button'),
    closeButton = document.querySelector('#close-button'),
    popUp = document.querySelector('.popup');

function openOverlay() {
    popUp.classList.remove('hidden')
}

function closeOverlay() {
    popUp.classList.add('hidden')
}

sendButton.addEventListener('click', openOverlay)
closeButton.addEventListener('click', closeOverlay)