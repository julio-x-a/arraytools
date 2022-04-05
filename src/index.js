const d = document;
const $arr = d.getElementById('array');
d.addEventListener('DOMContentLoaded', (e) => {
  setIndex();
  handlerButtons();
});

function handlerButtons() {
  d.addEventListener('click', (e) => {
    const arr = eval(getArrayValues());
    if (e.target.matches('#at')) atMethod(arr);
  });
}

const getArrayValues = () => {
  $arr.textContent.substring(10);
};

const atMethod = (arr) => {
  let index = window.prompt('Type index');
  const $spans = Array.from(d.querySelectorAll('#array span'));
  const $span = $spans.find(($span) => $span.id === index);
  if ($span) $span.classList.add('selected-val');
};

function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}
