import './style.css';
import ANI from './animations.js';

const d = document;
const $arr = d.getElementById('array');

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

const atMethod = () => {
  let index = window.prompt('Type index');
  const $spans = Array.from(d.querySelectorAll('#array span'));
  const element = $spans.find(($span) => $span.id === index);
  element?.animate(ANI.rollInBlurredTop, { duration: 1000, iterations: 1 });
};

const popMethod = async () => {
  const element = Array.from(d.querySelectorAll('#array span')).at(-1);
  if (element) {
    try {
      let state = await element?.animate(ANI.wobbleHorBottom, {
        duration: 250,
        iterations: 1
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
  const $spans = Array.from(d.querySelectorAll('#array span'));
  $spans.at(-1).insertAdjacentText('afterend', ', ');
};

function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}
