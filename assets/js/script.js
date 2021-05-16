const card = document.querySelectorAll(".gameCard")

function flipCard() {
    this.classList.toggle('flip');
    console.log("I was clicked");
    console.log(this);
}

card.forEach(card => card.addEventListener('click',flipCard));