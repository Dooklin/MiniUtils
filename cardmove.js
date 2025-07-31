const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelectorAll('.arrow')[0];
const rightArrow = document.querySelectorAll('.arrow')[1];

let activeIndex = 1;

function updateCardClasses() {
cards.forEach((card, i) => {
  card.classList.remove('left', 'right', 'active');
  if (i === activeIndex) {
  card.classList.add('active');
  } else if (i === activeIndex - 1) {
  card.classList.add('left');
  } else if (i === activeIndex + 1) {
  card.classList.add('right');
  }
});
}

leftArrow.addEventListener('click', () => {
  /* -1 bcus arrays start at 0*/
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  /* newcurrentCard = currentCard (0) -1 + allCard (6) % allCards (6) = latestCard (5) */
  /* newcurrentCard = currentCard (2) -1 + allCard (6) % allCards (6) = nextLeftCard (1) */
  updateCardClasses();
});

rightArrow.addEventListener('click', () => {
  /* Same thingies as above except to the right */
  activeIndex = (activeIndex + 1) % cards.length;
  updateCardClasses();
});


updateCardClasses();