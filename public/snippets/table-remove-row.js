let removeFirstRowEl = document.getElementById("btn-nuke-first-row");

removeFirstRowEl.addEventListener('click', function (evt) {
  document.querySelectorAll("TBODY TR")[0].textContent = "";
});