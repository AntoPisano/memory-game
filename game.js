const cards = document.querySelectorAll('.memoryCard');

let hasTurnedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function turnCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
       
    this.classList.add('turn');
    //first/second click
    if (!hasTurnedCard) {
        hasTurnedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
       
    // if cards match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(() => {    
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
        resetBoard();
    }, 1200);
}}      
}

function resetBoard() {
    [hasTurnedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', turnCard));
