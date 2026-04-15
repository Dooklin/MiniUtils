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
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateCardClasses();
});

rightArrow.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % cards.length;
  updateCardClasses();
});

cards.forEach(card => {
  card.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      updateCardClasses();
    } else if (e.deltaY > 0) {
      activeIndex = (activeIndex + 1) % cards.length;
      updateCardClasses();
    }
  }, { passive: false });
});

updateCardClasses();