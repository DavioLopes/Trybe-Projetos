const selectEmail = document.getElementById('email');
const selectPassword = document.getElementById('password');
const selectEntrar = document.getElementById('entrar');
const agree = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
// requisito 20 -------------------------------------------
const textArea = document.getElementById('textarea');
// requisito 20 -------------------------------------------

selectEntrar.addEventListener('click', () => {
  if (selectEmail.value === 'tryber@teste.com' && selectPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
// requisito 20 -------------------------------------------
textArea.addEventListener('input', (event) => {
  const counter = document.getElementById('counter');
  const text = event.target;
  let carac = 0;
  carac = 500 - text.value.length;
  counter.innerText = `${carac}`;
})
// requisito 20 -------------------------------------------
sendButton.disabled = true;

function send() {
  if (agree.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}
agree.addEventListener('click', (send));