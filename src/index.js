const d = document;
const $arr = d.getElementById('array');
d.addEventListener('DOMContentLoaded', (e) => {
  setIndex();
});

function handlerButtons() {
  d.addEventListener('click', (e) => {
    const arr = eval(getArrayValues());
    if (e.target.matches('#at')) {
      let index = prompt('Insert value');
      let arrValue = arr.at(index);
    }
  });
}

const getArrayValues = () => {
  $arr.textContent.substring(10);
};

const atMethod = (arr) => {};

function setIndex() {
  d.querySelectorAll('#array span').forEach(($span, index) => {
    $span.id = index;
  });
}
