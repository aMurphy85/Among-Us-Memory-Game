const card = document.querySelectorAll(".gameCard")

let flippedCard = false;
let firstCard, secondCard;

// Creating a flipcard function
function flipCard() {

    this.classList.toggle('flip');

    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;
    } else {
        flippedCard = false;
        secondCard = this;

        cardMatch();
    }    
}

function cardMatch() {
    if(firstCard.dataset.image === secondCard.dataset.image) {
            cardsMatch();
        } else {
            resetCards();
        }
}

function cardsMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function resetCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1200);
}

   // console.log("function worked!");


card.forEach(card => card.addEventListener('click',flipCard));