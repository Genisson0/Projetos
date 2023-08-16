let button = document.getElementById('no')
let heigth = window.innerHeight - 50
let width = window.innerWidth - 50

button.addEventListener('mouseover', function () {
  button.style.position = "absolute"
  button.style.top = Math.random() * heigth + "px"
  button.style.left = Math.random() * width + "px"
})