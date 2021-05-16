const card = document.querySelectorAll(".gameCard");

function flipCard() {
    this.classList.toggle(flipCard);
}

cards.forEach(card => card.addEventListener('click', flipCard))