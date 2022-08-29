const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const text = prompt('Enter new text!');
  para.textContent = `${text}`;
}