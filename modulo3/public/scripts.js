// manipulando os cards

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id"); // pega o id do video no html e faz com que abra na modal cada video clicado
        modalOverlay.classList.add('active')
        
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}` // Pegando o iframe
    })
}

// botão para fechar a modal
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = "" // remove o video na modal quando fechado.
})




