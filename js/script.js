function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function facBorderBottom() {
  document.getElementById('flush-headingFour').classList.contains('border-bottom') ? document.getElementById('flush-headingFour').classList.remove('border-bottom') : document.getElementById('flush-headingFour').classList.add('border-bottom')
}
