const inputs = document.querySelectorAll('.input');

const addClass = ({ target }) => {
  const parent = target.closest('.input-area')
  parent.classList.add('focused')
}

const removeClass = ({ target, target: { value } }) => {
  console.log({ value, target })
  const parent = target.closest('.input-area')
  if (value === "") {
    parent.classList.remove('focused')
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', addClass);
  input.addEventListener('blur', removeClass);
});