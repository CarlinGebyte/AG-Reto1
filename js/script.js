function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function facBorderBottom() {
  document.getElementById('flush-headingFour').classList.contains('border-bottom') ? document.getElementById('flush-headingFour').classList.remove('border-bottom') : document.getElementById('flush-headingFour').classList.add('border-bottom')
}

const form = document.getElementById('form');
const mail = document.getElementById('mail-to');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  alert('hola')
  mail.setAttribute('href', `mailto:correo@gmail.com?subject=${data.mail}&body=I need you to add a new browser`);
  mail.click();

})