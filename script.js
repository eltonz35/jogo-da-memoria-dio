const cards = document.querySelectorAll(".card");
let hasFlippdCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return; //caso clique duas vezes na mesma carta, não acontece nada

    this.classList.add("flip");
    if(!hasFlippdCard) {
        hasFlippdCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippdCard = false;
    checkForMatch();
}

function checkForMatch() { //função que desabilita o click, caso as cartas sejam iguais
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipedCards();
}

function disableCards() { //desabilita as cartas após o click
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipedCards() { //função que retorna as cartas ao estado inicial
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
    },  1500);
}

cards.forEach((card) => {  //Percorre toda a lista de cartas
    card.addEventListener("click", flipCard);
});