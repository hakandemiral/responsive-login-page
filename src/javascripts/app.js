const inputs = document.querySelectorAll('.input');

const addClass = ({ target }) => {
  const parent = target.closest('.input-area')
  parent.classList.add('focused')
}

const removeClass = ({ target }) => {
  const parent = target.closest('.input-area')
  if (parent.value === "") {
    parent.classList.remove('focused')
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', addClass);
  input.addEventListener('blur', removeClass);
});