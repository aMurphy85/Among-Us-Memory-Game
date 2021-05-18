const card = document.querySelectorAll('.gameCard');

// Creating variables for mempry game
let flippedCard = false;
let lockCardFlips = false;
let firstCard, secondCard;

function flipCard () {
    if (lockCardFlips) return;
    if(this === firstCard) return;

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

    resetGame();
}

function resetCards() {
    lockCardFlips = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetGame();
        }, 1500);
    }
}

function resetGame() {
    [flippedCard, lockCardFlips] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    card.forEach(card => {
        let cardPosition = Math.floor(Math.random() *16);
        card.style.order = cardPosition;
    });
}());

card.forEach(card => card.addEventListener('click', flipCard));