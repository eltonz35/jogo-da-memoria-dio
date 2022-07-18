const cards = document.querySelectorAll(".card");

function flipcard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => {  //Percorre toda a lista de cartas
    card.addEventListener("click", flipcard);
})