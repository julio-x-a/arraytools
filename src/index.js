import './styles/main.css';
import ANI from './animations.js';

const d = document;
const $arr = d.getElementById('array');
d.addEventListener('DOMContentLoaded', (e) => {
  setIndex();
  handlerButtons();
});

function handlerButtons() {
  d.addEventListener('click', (e) => {
    // const arr = eval(getArrayValues());
    if (e.target.matches('#at')) atMethod();
  });
}

const getArrayValues = () => {
  $arr.textContent.substring(10);
};

const atMethod = () => {
  let index = window.prompt('Type index');
  const $spans = Array.from(d.querySelectorAll('#array span'));
  const $span = $spans.find(($span) => $span.id === index);
  if ($span) {
    // $span.classList.add('selected-val');
    $span.animate(ANI.wobbleHorBottom, { duration: 1000, iterations: 1 });
  }
};

function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}

const span = document.querySelector('span');

span.addEventListener('click', () => {
  console.log(span);
  span.animate(ANI.wobbleHorBottom, { duration: 1000, iterations: 1 });
});
