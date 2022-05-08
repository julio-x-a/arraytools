import './output.css';
import ANI from './animations.js';

const d = document;

/**
 * It returns an array of all the span elements in the array page.
 */
const arraypage = () => Array.from(d.querySelectorAll('#array span'));

d.addEventListener('DOMContentLoaded', (e) => {
  setIndex();
  handlerButtons();
});

function handlerButtons() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('#at')) atMethod();
    if (e.target.matches('#pop')) popMethod();
  });
}

/**
 * It takes the index of the element you want to animate, finds the element with that index,
 * and then animates it.
 */
const atMethod = () => {
  let index = window.prompt('Type index');
  const element = arraypage().find(($span) => $span.id === index);
  element?.animate(ANI.rollInBlurredTop, { duration: 1000, iterations: 1 });
};

/**
 * It removes the last element of the array, and then removes the comma that follows it.
 */
const popMethod = async () => {
  const element = arraypage().at(-1);
  if (element) {
    try {
      let state = await element?.animate(ANI.wobbleHorBottom, {
        duration: 250,
        iterations: 1,
      }).finished;
      if (state.playState === 'finished') {
        let node = element.nextSibling;
        if (node.textContent === ', ') node.remove();
        element?.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const pushMethod = () => {
  const newElement = prompt('Insert value:');
  arraypage.at(-1).insertAdjacentText('afterend', ', ');
};

/**
 * It loops through all the spans in the array and sets their id to their index.
 */
function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}
