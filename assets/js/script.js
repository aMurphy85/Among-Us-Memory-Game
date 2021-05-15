const cards = document.querySelectorAll(".gameCard")

function flipCard() {
    console.log("flipcard");
    console.log('this');
}

cards.forEach(card => card.addEventListener('click', flipCard));