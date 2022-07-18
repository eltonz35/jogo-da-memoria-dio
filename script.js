const cards = document.querySelectorAll(".card");
let hasFlippdCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add("flip");
    if(!hasFlippdCard) {
        hasFlippdCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() { //função que desabilita o click, casa as cartas sejam iguais
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
}

cards.forEach((card) => {  //Percorre toda a lista de cartas
    card.addEventListener("click", flipCard);
});