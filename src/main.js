import './output.css';
import ANI from './animations.js';
import Swal from 'sweetalert2'


const d = document;

/**
 * Returns an array of all the span elements in the array page.
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
    if (e.target.matches('#push')) pushMethod();
    if (e.target.matches('#fill')) fillMethod();
  });
}

/**
 * Takes the index of the element you want to animate, finds the element with that index,
 * and then animates it.
 */
const atMethod = () => {
  let index = window.prompt('Type index');
  const element = arraypage().find(($span) => $span.id === index);
  element?.animate(ANI.blink, { duration: 250, iterations: 5 });
};

/**
 * Removes the last element of the array, and then removes the comma that follows it.
 */
const popMethod = async (element = arraypage().at(-1)) => {
  if (element) {
    try {
      let state = await element?.animate(ANI.wobbleHorBottom, { duration: 250, iterations: 1 }).finished;
      if (state.playState === 'finished') {
        let node = element.previousSibling;
        if (node.textContent.startsWith(',')) node.remove();
        element?.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

/**
 * Takes the last element of the array, and inserts a new element after it.
 */
const pushMethod = (element) => {
  const newElement = element ?? prompt('Insert value:');
  const lastElement = arraypage().at(-1);
  const span = d.createElement('span');
  span.id = +lastElement?.id + 1 ?? 0;
  span.textContent = newElement;
  lastElement ? lastElement.after(', ', span) : d.querySelector('.array').appendChild(span);
  arraypage().at(-1).animate(ANI.slideInFwdCenter, { duration: 500, iterations: 1 });
};

const fillMethod = () => {
  const n_elements = arraypage().length;
  arraypage().map((element) => popMethod(element));
  let element = window.prompt('Insert value:');
  for (let i = 0; i < n_elements; i++) { pushMethod(element) }
};

/**
 * Loops through all the spans in the array and sets their id to their index.
 */
function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}

