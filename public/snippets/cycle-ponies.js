let switchPoniesEl = document.getElementById("btn-cycle-ponies");

switchPoniesEl.addEventListener('click', function (evt) {
  let temp = document.getElementById('first').textContent;
  document.getElementById('first').textContent = document.getElementById('second').textContent;
  document.getElementById('second').textContent = temp;

  let tempImg = document.getElementById('firstImg').src;
  document.getElementById('firstImg').src = document.getElementById('secondImg').src;
  document.getElementById('secondImg').src = tempImg;
});