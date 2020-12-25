const cards = document.querySelectorAll('.memoryCard');

let hasTurnedCard = false;
let firstCard, secondCard;

function turnCard() {
    this.classList.add('turn');

    if (!hasTurnedCard) {
        hasTurnedCard = true;
        firstCard = this;
    } else {
        hasTurnedCard = false;
        secondCard = this;
       
    
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);
    } else {
        setTimeout(() => {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
    }, 1200);
}}      
}

cards.forEach(card => card.addEventListener('click', turnCard));
