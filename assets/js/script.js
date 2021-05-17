const card = document.querySelectorAll('.gameCard');

// Creating variables for mempry game
let flippedCard = false;
let lockCardFlips = false;
let firstCard, secondCard;

function flipCard () {
    if (lockCardFlips) return;

    this.classList.add('flip');

    
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
     
    } else {
        flippedCard = false;
        secondCard = this;

        cardMatch();
    }
}

function cardMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
            
        stopCards();
    } else {

        resetCards()                            ;
}

function stopCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function resetCards() {
    lockCardFlips = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockCardFlips = false;
        }, 1500);
    }
}

card.forEach(card => card.addEventListener('click', flipCard));