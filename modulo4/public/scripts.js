// manipulando os cards

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id"); // pega o id do video no html e faz com que abra na modal cada video clicado
        window.location.href = `/video?id=${videoId}`
        
       
    })
}





